(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t){var a={},n=[];a.setData=function(e){n=e},a.fetchData=function(){return n},a.clearData=function(){n={counter:0,spectra:{},retList1:[],query:"0"}},e.exports=a},49:function(e,t,a){e.exports=a(66)},54:function(e,t,a){},56:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),l=a.n(s),o=a(21);a(54),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(55);var i,p,c=a(5),d=a(6),u=a(8),h=a(7),m=a(9),f=a(19),y=a(15),v=(a(56),a(44)),g=a.n(v),E={x:[],y:[]},b={x:[],y:[]},k={x:[],y:[]},w={x:[],y:[]},S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleWrapperClick=function(e){e.preventDefault(),e.stopPropagation()},a.getGraphValues=function(){var e,t;E={x:[],y:[]},b={x:[],y:[]},k={x:[],y:[]},w={x:[],y:[]};var n=a.props.data2[9][0]-a.props.data1[9][0],r=a.props.data2[a.props.data2.length-10][0]-a.props.data1[a.props.data1.length-10][0],s=a.props.data4[0][0]-a.props.data3[0][0],l=a.props.data4[a.props.data4.length-1][0]-a.props.data3[a.props.data3.length-1][0];if(1===Math.sign(n)&&1===Math.sign(r)){for(e=9,t=Math.abs(a.props.data2[9][0]-a.props.data1[9][0]);Math.abs(a.props.data2[9][0]-a.props.data1[e][0])<=t;)t=Math.abs(a.props.data2[9][0]-a.props.data1[e][0]),e++;for(var o=--e;o<a.props.data1.length-9;o++)i=a.props.data1[o][0],p=a.props.data1[o][1],E.x.push(i),E.y.push(p);for(var c=9;c<a.props.data2.length-9-e;c++)i=a.props.data2[c][0],p=a.props.data2[c][1],b.x.push(i),b.y.push(p)}else if(-1===Math.sign(n)&&-1===Math.sign(r)){for(e=9,t=Math.abs(a.props.data2[9][0]-a.props.data1[9][0]);Math.abs(a.props.data1[9][0]-a.props.data2[e][0])<=t;)t=Math.abs(a.props.data1[9][0]-a.props.data2[e][0]),e++;e--;for(var d=9;d<a.props.data1.length-9-e;d++)i=a.props.data1[d][0],p=a.props.data1[d][1],E.x.push(i),E.y.push(p);for(var u=e;u<a.props.data2.length-9;u++)i=a.props.data2[u][0],p=a.props.data2[u][1],b.x.push(i),b.y.push(p)}else if(1===Math.sign(n)&&-1===Math.sign(r)){for(e=9,t=Math.abs(a.props.data2[9][0]-a.props.data1[9][0]);Math.abs(a.props.data2[9][0]-a.props.data1[e][0])<=t;)t=Math.abs(a.props.data2[9][0]-a.props.data1[e][0]),e++;for(var h=--e;h<a.props.data1.length-9-e;h++)i=a.props.data1[h][0],p=a.props.data1[h][1],E.x.push(i),E.y.push(p);for(var m=9;m<a.props.data2.length-9;m++)i=a.props.data2[m][0],p=a.props.data2[m][1],b.x.push(i),b.y.push(p)}else if(-1===Math.sign(n)&&1===Math.sign(r)){for(e=9,t=Math.abs(a.props.data1[9][0]-a.props.data2[9][0]);Math.abs(a.props.data1[9][0]-a.props.data2[e][0])<=t;)t=Math.abs(a.props.data1[9][0]-a.props.data2[e][0]),e++;e--;for(var f=9;f<a.props.data1.length-9;f++)i=a.props.data1[f][0],p=a.props.data1[f][1],E.x.push(i),E.y.push(p);for(var y=e;y<a.props.data2.length-9-e;y++)i=a.props.data2[y][0],p=a.props.data2[y][1],b.x.push(i),b.y.push(p)}else{for(var v=9;v<a.props.data1.length-9;v++)i=a.props.data1[v][0],p=a.props.data1[v][1],E.x.push(i),E.y.push(p);for(var g=9;g<a.props.data2.length-9;g++)i=a.props.data2[g][0],p=a.props.data2[g][1],b.x.push(i),b.y.push(p)}if(1===Math.sign(s)&&1===Math.sign(l)){for(e=0,t=Math.abs(a.props.data4[0][0]-a.props.data3[0][0]);Math.abs(a.props.data4[0][0]-a.props.data3[e][0])<=t;)t=Math.abs(a.props.data4[0][0]-a.props.data3[e][0]),e++;for(var S=--e;S<a.props.data3.length;S++)i=a.props.data3[S][0],p=a.props.data3[S][1],k.x.push(i),k.y.push(p);for(var C=0;C<a.props.data4.length-e;C++)i=a.props.data4[C][0],p=a.props.data4[C][1],w.x.push(i),w.y.push(p)}else if(-1===Math.sign(s)&&-1===Math.sign(l)){for(e=0,t=Math.abs(a.props.data4[0][0]-a.props.data3[0][0]);Math.abs(a.props.data3[0][0]-a.props.data4[e][0])<=t;)t=Math.abs(a.props.data3[0][0]-a.props.data4[e][0]),e++;e--;for(var O=0;O<a.props.data3.length-e;O++)i=a.props.data3[O][0],p=a.props.data3[O][1],k.x.push(i),k.y.push(p);for(var j=e;j<a.props.data4.length;j++)i=a.props.data4[j][0],p=a.props.data4[j][1],w.x.push(i),w.y.push(p)}else if(1===Math.sign(s)&&-1===Math.sign(l)){for(e=0,t=Math.abs(a.props.data4[0][0]-a.props.data3[0][0]);Math.abs(a.props.data4[0][0]-a.props.data3[e][0])<=t;)t=Math.abs(a.props.data4[0][0]-a.props.data3[e][0]),e++;for(var x=--e;x<a.props.data3.length-e;x++)i=a.props.data3[x][0],p=a.props.data3[x][1],k.x.push(i),k.y.push(p);for(var M=0;M<a.props.data4.length;M++)i=a.props.data4[M][0],p=a.props.data4[M][1],w.x.push(i),w.y.push(p)}else if(-1===Math.sign(s)&&1===Math.sign(l)){for(e=0,t=Math.abs(a.props.data4[0][0]-a.props.data3[0][0]);Math.abs(a.props.data3[0][0]-a.props.data4[e][0])<=t;)t=Math.abs(a.props.data3[0][0]-a.props.data4[e][0]),e++;e--;for(var A=0;A<a.props.data3.length;A++)i=a.props.data3[A][0],p=a.props.data3[A][1],k.x.push(i),k.y.push(p);for(var L=e;L<a.props.data4.length-e;L++)i=a.props.data4[L][0],p=a.props.data4[L][1],w.x.push(i),w.y.push(p)}else{for(var I=0;I<a.props.data3.length;I++)i=a.props.data3[I][0],p=a.props.data3[I][1],k.x.push(i),k.y.push(p);for(var q=0;q<a.props.data4.length;q++)i=a.props.data4[q][0],p=a.props.data4[q][1],w.x.push(i),w.y.push(p)}},a.togGraph=function(e,t){e.preventDefault(),e.stopPropagation(),a.props.makeGraph(t)},a.state={line1:{x:[],y:[]},line2:{x:[],y:[]},line3:{x:[],y:[]},line4:{x:[],y:[]},g_id:0},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.name.split(".")[0],a=this.props.query.split(".")[0],n=this.props.name.split(".")[0]+" vs "+this.props.query.split(".")[0];this.getGraphValues();var s;return s=[{name:t,x:E.x,y:E.y,mode:"lines",fill:"none",line:{color:"rgb(255, 0, 0)",width:.5}},{name:a,x:b.x,y:b.y,mode:"lines",fill:"tonexty",line:{color:"rgb(0, 0, 255)",width:.5},fillcolor:"rgba(0, 0, 255, 0.1)"},{name:t,x:k.x,y:k.y,mode:"lines",fill:"none",xaxis:"x2",yaxis:"y2",line:{color:"rgb(255, 0, 0)",width:.5}},{name:a,x:w.x,y:w.y,mode:"lines",fill:"tonexty",xaxis:"x2",yaxis:"y2",line:{color:"rgb(0, 0, 255)",width:.5},fillcolor:"rgba(0, 0, 255, 0.1)"}],r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"title"},r.a.createElement("a",{href:"",className:"exit",onClick:function(t){return e.togGraph(t,e.props.keyId)}},"-")),r.a.createElement(g.a,{key:this.props.keyId,data:s,layout:{legend:{x:0,y:1.3,traceorder:"normal"},width:.7*window.innerWidth,height:400,title:n,grid:{rows:1,columns:2,pattern:"independent"}}}))}}]),t}(n.Component);function C(e,t,a){for(var n=Object.keys(t),r=[],s=e[a],l=[],o=0,i=0;i<s.length;i++)l.push(s[i][0]),o+=s[i][1];o/=s.length;for(var p=0;p<e.length;p++){for(var c,d=e[p],u=[],h=[],m=0,f=0;f<d.length;f++)u.push(d[f][0]),m+=d[f][1];m/=d.length;for(var y=0,v=0;v<l.length;v++){for(var g=Math.abs(l[v]-u[y]);Math.abs(l[v]-u[y])<=g&&y<l.length;)g=Math.abs(l[v]-u[y]),y++;y--,h.push(y)}for(var E=0,b=0,k=0,w=0;w<h.length;w++)Math.abs(s[w][0]-d[h[w]][0])<=7&&(E+=(s[w][1]-o)*(d[h[w]][1]-m),b+=Math.pow(s[w][1]-o,2),k+=Math.pow(d[h[w]][1]-m,2));c=E/(Math.sqrt(b)*Math.sqrt(k)),r.push([c,n[p],p]),r.sort(function(e,t){return t[0]-e[0]})}return r}var O,j=[],x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).exitResultItem=function(e,t){e.preventDefault(),e.stopPropagation(),document.querySelector(".viewTitleList > ul > #l_".concat(t)).classList.toggle("toggleGraph")},a.makeGraph=function(e){var t=document.querySelector(".viewTitleList > ul > li > #g_".concat(e));document.querySelector(".viewTitleList > ul > #l_".concat(e)).classList.toggle("toggleGreen"),t.classList.toggle("toggleGraph")},a.handleDivClick=function(e){e.preventDefault(),e.stopPropagation()},a.state={counter:a.props.AppState.counter,spectra:a.props.AppState.spectra,query:a.props.AppState.query,retList1:a.props.AppState.retList1},a.makeGraph=a.makeGraph.bind(Object(y.a)(a)),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=void 0;if(this.props.AppState.counter>0&&Object.keys(this.props.AppState.spectra).length>0&&void 0!==this.props.AppState.query&&this.state.retList1.length>0){j=C(this.props.AppState.retList1,this.props.AppState.spectra,this.props.AppState.query);var a,n,s=Object.keys(this.props.AppState.spectra)[this.props.AppState.query];a=this.props.AppState.retList1,n=Object.keys(this.props.AppState.spectra).map(function(t){return e.props.AppState.spectra[t]}),t=r.a.createElement("ul",{id:"graphsList"},j.map(function(t,l){if(!(1===t[0]||l>40)&&e.props.AppState.query){var o=t[2],i=t[1],p=a[e.props.AppState.query],c=a[o],d=n[e.props.AppState.query],u=n[o];return r.a.createElement("li",{key:l,id:"l_".concat(l),onClick:function(){return e.makeGraph(l.toString())}},t[1].split(".")[0]," :"," ",(100*t[0]).toPrecision(4)+"%",r.a.createElement("div",{className:"exitResultItem",onClick:function(t){return e.exitResultItem(t,l)}},"x"),r.a.createElement("div",{key:l,className:"toggleGraph",id:"g_".concat(l),onClick:function(t){return e.handleDivClick(t)}},r.a.createElement("p",null),r.a.createElement(S,{keyId:l,makeGraph:e.makeGraph,name:i,query:s,data1:u,data2:d,data3:c,data4:p})))}}))}return r.a.createElement("div",{class:"viewTitleList"},t)}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={counter:a.props.AppState.counter,spectra:a.props.AppState.spectra,query:a.props.AppState.query},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=r.a.createElement("h2",null,"Please Upload Files"),t=void 0;return this.state.counter>0&&Object.keys(this.state.spectra).length>0&&(e=r.a.createElement("h2",null,"Query: ",Object.keys(this.state.spectra)[this.state.query]),t=Object.keys(this.state.spectra).map(function(e,t){return r.a.createElement("option",{key:t,value:t}," ",e," ")})),r.a.createElement("div",null,r.a.createElement("div",{id:"queryDiv"},r.a.createElement("p",null,e)),r.a.createElement("div",{id:"selectDiv"}," ",r.a.createElement("select",{id:"select-app",onChange:this.props.handleQuery},r.a.createElement("option",{selected:!0,disabled:!0},"Select Query"),t)))}}]),t}(n.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"footer"},r.a.createElement("div",null,"\xa92019 Infrared Spectra Comparison Interface"),r.a.createElement("p",null),r.a.createElement("div",null,"CSC 450"),r.a.createElement("div",null,"Charles H\u2019Doubler, Jonathan Hovick, Kristopher Kvenvold,"),r.a.createElement("div",null,"Adam Morse, Cameron Olson, Scott Popken, Hannah Towle"))}}]),t}(n.Component),L=a(26),I=a(41),q=a(42),B=[],H=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=function(){document.getElementById("ResultsButton").disabled=!0;var e=I.fetchData();a.setState({data:e}),a.enableButtons()},a.enableButtons=function(){I.fetchData().counter>0&&(document.getElementById("ResultsButton").disabled=!1)},a.componentDidUpdate=function(){I.setData(a.state.data)},a.download=function(e,t){var a=document.createElement("a");if(a.setAttribute("href","data:application,"+encodeURIComponent(t)),a.setAttribute("download",e),document.createEvent){var n=document.createEvent("MouseEvents");n.initEvent("click",!0,!0),a.dispatchEvent(n)}else a.click()},a.exportResultsToSave=function(){var e=!1;if(a.state.data.retList1.length>0&&(e=!0),!0===e){B=C(a.state.data.retList1,a.state.data.spectra,a.state.data.query);var t=Object.keys(a.state.data.spectra)[a.state.data.query],n=q.unparse({fields:["Score","Filename"],data:B});a.download("".concat(t),n)}else document.getElementById("ResultsButton").disabled=!0},a.handleQuery=function(e){a.setState({data:{query:e.target.value,counter:a.state.data.counter,spectra:a.state.data.spectra,retList1:a.state.data.retList1}})};var n=I.fetchData();return a.state={data:{counter:n.counter,spectra:n.spectra,retList1:n.retList1,query:n.query}},a.handleQuery=a.handleQuery.bind(Object(y.a)(a)),a.routeToHome=a.routeToHome.bind(Object(y.a)(a)),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"routeToHome",value:function(){this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("body",null,r.a.createElement("div",{id:"mainBody"},r.a.createElement("div",{className:"row justify-content-right"},r.a.createElement("div",null,r.a.createElement(L.a,{id:"HomeButton",variant:"info",onClick:this.routeToHome}," Home ")," ",r.a.createElement(L.a,{id:"ResultsButton",variant:"info",onClick:this.exportResultsToSave}," Save Results "))),r.a.createElement(M,{AppState:this.state.data,handleQuery:this.handleQuery,key:parseInt(this.state.data.query)+parseInt(this.state.data.counter)})),r.a.createElement("div",{id:"resultsSection"},r.a.createElement(x,{AppState:this.state.data,key:parseInt(this.state.data.query)+parseInt(this.state.data.counter),addGraph:this.addGraph})),r.a.createElement(A,null)))}}]),t}(n.Component),N=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"inputSpacer"},r.a.createElement("label",{id:"inputLabel"},r.a.createElement("input",{id:"FileSelector",className:"csv-input",type:"file",multiple:!0,accept:".csv",ref:this.props.AppRef,name:"file",placeholder:null,onChange:this.props.handleChange}),r.a.createElement("span",{id:"fileUploadSpan"},"Choose your CSV Files"))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",null,r.a.createElement(L.a,{id:"UploadButton",variant:"info",onClick:this.props.importCSV},"Upload Files")," ",r.a.createElement(L.a,{id:"hitlistButton",variant:"info",onClick:this.props.routeChange},"View Hitlist"))))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={counter:a.props.AppState.counter,spectra:a.props.AppState.spectra},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=r.a.createElement("h2",null,"Please upload files"),t="hidden",a=void 0;return this.state.counter>0&&Object.keys(this.state.spectra).length>0&&(e=r.a.createElement("h2",null,"Uploaded files: "),t="ViewId",a=Object.keys(this.state.spectra).map(function(e,t){return r.a.createElement("option",{key:t,value:t}," ",e," ")})),r.a.createElement("div",{id:"UploadedFiles"},r.a.createElement("p",null,e),r.a.createElement("div",{className:"ViewArea",id:t},r.a.createElement("select",{id:"uploaded-files"},r.a.createElement("option",{selected:!0,disabled:!0},"Uploaded Files"),a)))}}]),t}(n.Component),R=a(41),G=a(42),V=0,P={},T=[],U=0,K=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=function(){document.getElementById("hitlistButton").disabled=!0,document.getElementById("UploadButton").disabled=!0,V=0,T=[],P={},R.clearData()},a.componentWillUnmount=function(){R.setData(a.state.data)},a.importCSV=function(){var e=a.AppRef.current.files,t=[];if(Object.keys(P))for(var n=0;n<e.length;n++)e[n].name in P||(t.push(e[n]),V++);else for(var r=0;r<e.length;r++)t.push(e[r]),V++;if(t.length>0)for(var s=0;s<t.length;s++)"csv"===t[s].name.split(".")[1]?G.parse(t[s],{complete:a.papaSetState,skipEmptyLines:!0,error:a.CSVParseError}):(alert("".concat(t[s].name," is not a valid .csv file!")),V--)},a.papaSetState=function(e,t){e.data[0][0]-e.data[e.data.length-1][0]>0&&e.data.sort(function(e,t){return e[0]-t[0]});for(var n=0;n<e.data.length;n++)if(!0===a.onlyLetters(e.data[n][0])||!0===a.onlyLetters(e.data[n][1])){var r=e.data[n],s=e.data.indexOf(r);e.data.splice(s,1),n--}if(P[t.name]=e.data,a.setState({data:{counter:V,spectra:P,query:a.state.data.query}}),(O=Object.keys(P).map(function(e){return P[e]})).length!==V){var l=document.getElementById("bar"),o=document.getElementById("progress");l.style.display="block",o.style.display="inline-block",U=O.length/V*100,l.style.width=U+"%",l.innerHTML=(1*U).toPrecision(2)+"%"}else{document.getElementById("hitlistButton").disabled=!1;var i=document.getElementById("bar");U=O.length/V*100,i.style.width=U+"%",i.innerHTML=(1*U).toPrecision(3)+"%",i.style.display="none"}var p=e.data;a.nlc(p,9,.3),a.handleNLCState()},a.onlyLetters=function(e){if(e.match("^[A-z]+$"))return!0},a.CSVParseError=function(e,t){void 0===t&&alert("Unable to process CSV file, please verify the file can be accessed and try again. Error reason was: "+e.code)},a.handleChange=function(e){document.getElementById("UploadButton").disabled=!1},a.printQuery=function(){var e;return Object.keys(a.state.data.spectra).length>0&&void 0!==a.state.data.query&&(e=r.a.createElement("p",null,"Query: ",Object.keys(a.state.data.spectra)[a.state.data.query])),e},a.nlc=function(e,t,a){for(var n=[],r=0;r<e.length;r++){var s=[parseFloat(e[r][0]),parseFloat(e[r][1])];n.push(s)}T.push(n)},a.handleNLCState=function(){a.setState({data:{counter:a.state.data.counter,spectra:a.state.data.spectra,query:a.state.data.query,retList1:T}})},a.state={data:{counter:0,spectra:{},query:"0",retList1:[]}},a.handleChange=a.handleChange.bind(Object(y.a)(a)),a.importCSV=a.importCSV.bind(Object(y.a)(a)),a.AppRef=r.a.createRef(),a.routeChange=a.routeChange.bind(Object(y.a)(a)),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"routeChange",value:function(){if(this.state.data.retList1.length>0){this.props.history.push("/hitlist")}}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("body",null,r.a.createElement("div",{id:"mainBody"},this.printQuery(),r.a.createElement(N,{AppState:this.state.data,AppRef:this.AppRef,importCSV:this.importCSV,handleChange:this.handleChange,routeChange:this.routeChange}),r.a.createElement("div",{id:"progressBar"},r.a.createElement("div",{id:"progress"},r.a.createElement("div",{id:"bar"},"0%")))),r.a.createElement("div",{id:"ViewArea"},r.a.createElement(D,{AppState:this.state.data,key:this.state.data.counter})),r.a.createElement(A,null)))}}]),t}(n.Component),Q=a(17),F=a(10),z=a(46),W=a(35),_=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"Help"},r.a.createElement("div",{id:"extraBody"},r.a.createElement("h1",null,"Help"),r.a.createElement(Q.a.Container,{id:"left-tabs-example",defaultActiveKey:"first"},r.a.createElement(z.a,null,r.a.createElement(W.a,{sm:3},r.a.createElement(F.a,{variant:"pills",className:"flex-column"},r.a.createElement(F.a.Item,null,r.a.createElement(F.a.Link,{eventKey:"1"},"Uploading Files")),r.a.createElement(F.a.Item,null,r.a.createElement(F.a.Link,{eventKey:"2"},"Viewing Hitlist")),r.a.createElement(F.a.Item,null,r.a.createElement(F.a.Link,{eventKey:"3"},"Select A New Query")),r.a.createElement(F.a.Item,null,r.a.createElement(F.a.Link,{eventKey:"4"},"Selecting New Files")),r.a.createElement(F.a.Item,null,r.a.createElement(F.a.Link,{eventKey:"5"},"Saving Results")),r.a.createElement(F.a.Item,null,r.a.createElement(F.a.Link,{eventKey:"6"},"Saving Graphs")),r.a.createElement(F.a.Item,null,r.a.createElement(F.a.Link,{eventKey:"7"},"Closing Graphs")))),r.a.createElement(W.a,{sm:9},r.a.createElement(Q.a.Content,null,r.a.createElement(Q.a.Pane,{eventKey:"1"},r.a.createElement("video",{poster:"./uploadFiles.gif"}),r.a.createElement("p",null,"Click \u201cChoose Your CSV Files\u201d"),r.a.createElement("p",null,'Selecting a file and holding "Ctrl" + "Click" allows for multiple file selection.'),r.a.createElement("p",null,'Selecting all files in a folder: Select one file, press "Ctrl" + "a".'),r.a.createElement("p",null,'Quick selecting a batch of files: Select the first file you wish to upload. Press "Shift" + "Click" on the last file you wish to upload. This will select all files in between the first and last.'),r.a.createElement("p",null,'Click "Upload" (By default, the first file will be selected as the Query. This can be changed after clicking "View Hitlist")')),r.a.createElement(Q.a.Pane,{eventKey:"2"},r.a.createElement("video",{poster:"./viewHitlist.gif",width:"1000"}),r.a.createElement("p",null,'Click "View Hitlist"'),r.a.createElement("p",null,"Click on the blue bar with the name of the file you wish to graph.")),r.a.createElement(Q.a.Pane,{eventKey:"3"},r.a.createElement("video",{poster:"./selectNewQuery.gif"}),r.a.createElement("p",null,"Click the drop-down-box to select a new query."),r.a.createElement("p",null,"Select your new query by clicking the file name")),r.a.createElement(Q.a.Pane,{eventKey:"4"},r.a.createElement("video",{poster:"./selectingNewFiles.gif"}),r.a.createElement("p",null,'Important Note: When visiting the "Upload" page or by clicking "Home" from the "View Hitlist" page, your session is restarted. However, you can still visit the "About" or "Help" page and return back to view your Hitlist without losing data.'),r.a.createElement("p",null,'Click "Home" to return to the "Upload" page.'),r.a.createElement("p",null,"Select your new files.")),r.a.createElement(Q.a.Pane,{eventKey:"5"},r.a.createElement("video",{poster:"./savingResults.gif"}),r.a.createElement("p",null,'Click "Save Results"'),r.a.createElement("p",null,'The browser will save your results in the "Download" section. You can view or save to your local machine before exiting the application.')),r.a.createElement(Q.a.Pane,{eventKey:"6"},r.a.createElement("video",{poster:"./savingGraphs.gif"}),r.a.createElement("p",null,"Click your chosen graph to expand the selected match."),r.a.createElement("p",null,"Hover your mouse to the top of graphing area."),r.a.createElement("p",null,"Options will appear. Select the icon that resembles a camera."),r.a.createElement("p",null,"This will then prompt the option to view or save to local machine.")),r.a.createElement(Q.a.Pane,{eventKey:"7"},r.a.createElement("video",{poster:"./closingGraphs.gif"}),r.a.createElement("p",null,"Clicking on the blue bar in your Hitlist results expands that given match to view the graphs."),r.a.createElement("p",null,'If it is open, you may click the same bar to minimize it. You may also select the blue "-" to minimize the graphs.'),r.a.createElement("p",null,'Clicking the red "X" will remove the result from the Hitlist.'),r.a.createElement("p",null,"Removing (Closing) graphs can help strategically place results closer to eachother to help compare differences."))))))),r.a.createElement(A,null))}}]),t}(n.Component),J=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"About"},r.a.createElement("div",{id:"extraBody"},r.a.createElement("h1",null,"About"),r.a.createElement("div",null,"Infrared Spectroscopy is a technique with a wide range of applications, from identifying unknown materials to verifying the quality of a sample, and is useful to fields such as analytical chemistry, pharmacology, and forensic science, among others. An infrared spectra comparison interface is necessary for processing and normalizing high volumes of spectra data and reliably providing chemists, researchers, and other professionals with potential matches within a set of samples they submit, as well as the degree of certainty. Additionally, this application will display the output graphically for easy visualization."),r.a.createElement("div",null,"The Infrared Spectra Comparison Interface is a single-page web application that will utilize the Normalized Local Change (NLC) algorithm to identify the closest possible matches within user-submitted IR Spectra data for various chemical compounds.")),r.a.createElement(A,null))}}]),t}(n.Component),Y=a(38),$=a(24),X=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(Y.a,{id:"navBar"},r.a.createElement(Y.a.Brand,{as:o.b,to:"/"}," ",r.a.createElement("img",{src:"/spectra1.png",width:"50",height:"50",className:"d-inline-block align-top",alt:"Spectra Logo"})),r.a.createElement(F.a,null,r.a.createElement($.a,{eventkey:1,href:"/"},r.a.createElement(F.a.Link,{as:o.b,className:"nav-link",to:"/",activeclassname:"active"},"Upload")),r.a.createElement($.a,{eventkey:2,href:"/hitlist"},r.a.createElement(F.a.Link,{as:o.b,className:"nav-link",to:"/hitlist",activeclassname:"active"},"Hitlist")),r.a.createElement($.a,{eventkey:3,href:"/help"},r.a.createElement(F.a.Link,{as:o.b,className:"nav-link",to:"/help",activeclassname:"active"},"Help")),r.a.createElement($.a,{eventkey:4,href:"/about"},r.a.createElement(F.a.Link,{as:o.b,className:"nav-link",to:"/about",activeclassname:"active"},"About"))))),r.a.createElement("div",null,r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",component:K}),r.a.createElement(f.a,{exact:!0,path:"/hitlist",component:H}),r.a.createElement(f.a,{exact:!0,path:"/help",component:_}),r.a.createElement(f.a,{exact:!0,path:"/about",component:J}),r.a.createElement(f.a,{render:function(){return r.a.createElement("p",null,"Not found")}}))))}}]),t}(n.Component),Z=r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement("div",{id:"titleBar"},r.a.createElement("div",{id:"ISCITitle"},"Infrared Spectra Comparison Interface"),r.a.createElement(X,null))));l.a.render(Z,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[49,1,2]]]);
//# sourceMappingURL=main.7aceb020.chunk.js.map