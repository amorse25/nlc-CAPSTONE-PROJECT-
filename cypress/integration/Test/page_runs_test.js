describe('ISCI Testing Output', function () {
	it('Uploading Files', function () {
		// URL
		cy.visit('https://localhost:3000/');
		cy.url().should('include', '/');

		cy.get('#bar').contains('0%');

		// For Manual File Upload
		cy.log('Choose files and resume');
		cy.pause();

		// Restart After Upload
		cy.get('#bar').contains('0%');
		cy.get('#UploadButton').click();
		cy.get('#bar').contains('100%');

		// Uploaded Files
		cy.get('#uploaded-files').find('option').contains('Catmeowide.csv');
		cy.get('#uploaded-files').find('option').contains('Fakeonium.csv');
		cy.get('#uploaded-files').find('option').contains('Flipizide.csv');
		cy.get('#uploaded-files').find('option').contains('Lineine.csv');
		cy.get('#uploaded-files').find('option').contains('Longon.csv');
		cy.get('#uploaded-files').find('option').contains('Mirrorium.csv');
		cy.get('#uploaded-files').find('option').contains('Randonium.csv');
		cy.get('#uploaded-files').find('option').contains('Shorton.csv');
		cy.get('#uploaded-files').find('option').contains('Sineide.csv');
		cy.get('#uploaded-files').find('option').contains('Waveion.csv');
	});

	it('View Hit List', function () {
		cy.get('#hitlistButton').click();
		cy.url().should('include', '/hitlist');
		cy.get('#queryDiv').contains('Catmeowide.csv');
		cy.get('#graphsList').get('li').should('have.length', 9);
		cy.get('#l_1').contains('Waveion');
		cy.get('#l_2').contains('Shorton');
		cy.get('#l_3').contains('Longon');
		cy.get('#l_4').contains('Lineine');
		cy.get('#l_5').contains('Randonium');
		cy.get('#l_6').contains('Fakeonium');
		cy.get('#l_7').contains('Mirrorium');
		cy.get('#l_8').contains('Sineide');
		cy.get('#l_9').contains('Flipizide');
	});

	it('Check Default Similarity', function () {
		cy.get('#l_1').contains('97.06%');
		cy.get('#l_2').contains('92.91%');
		cy.get('#l_3').contains('90.72%');
		cy.get('#l_4').contains('89.18%');
		cy.get('#l_5').contains('88.57%');
		cy.get('#l_6').contains('87.79%');
		cy.get('#l_7').contains('86.41%');
		cy.get('#l_8').contains('84.21%');
		cy.get('#l_9').contains('73.78%');
	});

	it('Query Fakeonium', function () {
		cy.get('#select-app').select('Fakeonium.csv');
		cy.get('#queryDiv').contains('Fakeonium.csv');
		cy.get('#graphsList').get('li').should('have.length', 9);
		cy.get('#l_1').contains('Waveion');
		cy.get('#l_1').contains('96.11%');
		cy.get('#l_9').contains('Flipizide');
		cy.get('#l_9').contains('71.08%');
	});

	it('Query Flipizide', function () {
		cy.get('#select-app').select('Flipizide.csv');
		cy.get('#queryDiv').contains('Flipizide.csv');
		cy.get('#graphsList').get('li').should('have.length', 9);
		cy.get('#l_1').contains('Waveion');
		cy.get('#l_1').contains('94.13%');
		cy.get('#l_9').contains('Sineide');
		cy.get('#l_9').contains('62.84%');
	});

	it('Query Lineine', function () {
		cy.get('#select-app').select('Lineine.csv');
		cy.get('#queryDiv').contains('Lineine.csv');
		cy.get('#graphsList').get('li').should('have.length', 9);
		cy.get('#l_1').contains('Waveion');
		cy.get('#l_1').contains('95.12%');
		cy.get('#l_9').contains('Flipizide');
		cy.get('#l_9').contains('77.01%');
	});

	it('Query Longon', function () {
		cy.get('#select-app').select('Longon.csv');
		cy.get('#queryDiv').contains('Longon.csv');
		cy.get('#graphsList').get('li').should('have.length', 9);
		cy.get('#l_1').contains('Shorton');
		cy.get('#l_1').contains('94.71%');
		cy.get('#l_9').contains('Flipizide');
		cy.get('#l_9').contains('86.57%');
	});

	it('Query Mirrorium', function () {
		cy.get('#select-app').select('Mirrorium.csv');
		cy.get('#queryDiv').contains('Mirrorium.csv');
		cy.get('#graphsList').get('li').should('have.length', 9);
		cy.get('#l_1').contains('Waveion');
		cy.get('#l_1').contains('94.93%');
		cy.get('#l_9').contains('Flipizide');
		cy.get('#l_9').contains('69.87%');
	});

	it('Query Randonium', function () {
		cy.get('#select-app').select('Randonium.csv');
		cy.get('#queryDiv').contains('Randonium.csv');
		cy.get('#graphsList').get('li').should('have.length', 9);
		cy.get('#l_1').contains('Waveion');
		cy.get('#l_1').contains('96.45%');
		cy.get('#l_9').contains('Flipizide');
		cy.get('#l_9').contains('70.67%');
	});

	it('Query Shorton', function () {
		cy.get('#select-app').select('Shorton.csv');
		cy.get('#queryDiv').contains('Shorton.csv');
		cy.get('#graphsList').get('li').should('have.length', 9);
		cy.get('#l_1').contains('Waveion');
		cy.get('#l_1').contains('96.36%');
		cy.get('#l_9').contains('Flipizide');
		cy.get('#l_9').contains('83.71%');
	});

	it('Query Sineide', function () {
		cy.get('#select-app').select('Sineide.csv');
		cy.get('#queryDiv').contains('Sineide.csv');
		cy.get('#graphsList').get('li').should('have.length', 9);
		cy.get('#l_1').contains('Waveion');
		cy.get('#l_1').contains('93.55%');
		cy.get('#l_9').contains('Flipizide');
		cy.get('#l_9').contains('62.84%');
	});

	it('Query Waveion', function () {
		cy.get('#select-app').select('Waveion.csv');
		cy.get('#queryDiv').contains('Waveion.csv');
		cy.get('#graphsList').get('li').should('have.length', 9);
		cy.get('#l_1').contains('Shorton ');
		cy.get('#l_1').contains('96.52%');
		cy.get('#l_9').contains('Longon');
		cy.get('#l_9').contains('91.14%');
	});

	it('Query Catmeowide', function () {
		cy.get('#select-app').select('Catmeowide.csv');
		cy.get('#queryDiv').contains('Catmeowide.csv');
		cy.get('#graphsList').get('li').should('have.length', 9);

		cy.get('#l_1').contains('Waveion');
		cy.get('#l_2').contains('Shorton');
		cy.get('#l_3').contains('Longon');
		cy.get('#l_4').contains('Lineine');
		cy.get('#l_5').contains('Randonium');
		cy.get('#l_6').contains('Fakeonium');
		cy.get('#l_7').contains('Mirrorium');
		cy.get('#l_8').contains('Sineide');
		cy.get('#l_9').contains('Flipizide');

		cy.get('#l_1').contains('97.06%');
		cy.get('#l_2').contains('92.91%');
		cy.get('#l_3').contains('90.72%');
		cy.get('#l_4').contains('89.18%');
		cy.get('#l_5').contains('88.57%');
		cy.get('#l_6').contains('87.79%');
		cy.get('#l_7').contains('86.41%');
		cy.get('#l_8').contains('84.21%');
		cy.get('#l_9').contains('73.78%');
	});
});