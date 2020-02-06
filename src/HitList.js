/***** Export function responsible for calculating the similarity score. The similarity score
 *     is compares query against all other uploaded files.
 *     Completes FR.2
 *   *****/


/***** Hovick, might want to explain more here in this section*****/
export function calculateScore(retlist, spectra, query){
    var names = Object.keys(spectra)
    var scoreArray = [];
    var queryList = retlist[query];
    var queryXs = [];
    

    //get all of the x values from the query spectrum
    var queryAvg = 0;
    for(let i = 0; i < queryList.length; i++) {
        queryXs.push(queryList[i][0]);
		queryAvg+=queryList[i][1];
    };
    queryAvg = queryAvg/queryList.length;

    for(let l = 0; l < retlist.length; l++) {
        var score = 0;
        var keyIdList = retlist[l];
        var keyIdXs = [];
        var minIndexes = [];
	
		var subjectAvg = 0;
        //get all of the x values from the comparison spectrum
        for(let j = 0; j < keyIdList.length; j++) {
            keyIdXs.push(keyIdList[j][0]);
			subjectAvg += keyIdList[j][1];
        };
		subjectAvg = subjectAvg / keyIdList.length;
	
        var j=0;
        for(let k = 0; k < queryXs.length; k++) {
            var minDiff = Math.abs(queryXs[k] - keyIdXs[j]);
            //while the difference between the x values is not greater than the minimum difference
            while (Math.abs(queryXs[k] - keyIdXs[j])<=minDiff && j<queryXs.length){
                minDiff = Math.abs(queryXs[k] - keyIdXs[j]);
                j++;
            }
            j--;
            minIndexes.push(j);
        };
	
		/*
		var subjectAvg = 0;
			for(let m = 0; m < minIndexes.length; m++) {
			subjectAvg += keyIdList[minIndexes[m]][1];
		}
		subjectAvg = subjectAvg / minIndexes.length;
		*/
	
		var A=0;
		var B=0;
		var C=0;

        for(let m = 0; m < minIndexes.length; m++) {
            if(Math.abs(queryList[m][0] - keyIdList[minIndexes[m]][0]) <= 7) {
                A += (queryList[m][1] - queryAvg )*(keyIdList[minIndexes[m]][1] - subjectAvg);
				B += Math.pow(queryList[m][1] - queryAvg,2);
				C += Math.pow(keyIdList[minIndexes[m]][1] - subjectAvg,2);
            }  
        };
		score = A/(Math.sqrt(B)*Math.sqrt(C));
	
        scoreArray.push([score, names[l], l]);
        //sort the array of scores in descending order
        scoreArray.sort(function(a,b){return b[0]-a[0]})
    };
    return scoreArray;

}
