describe('Default Page Loads', function () {
	it('Main ISCI Elements Render', function () {
		// URL
		cy.visit('https://localhost:3000/');
		cy.url().should('include', '/');

		// Title
		cy.get('#ISCITitle').contains('Infrared Spectra Comparison Interface');

		// Navigation Bar
		cy.get('#navBar').contains('Upload');
		cy.get('#navBar').contains('Hitlist');
		cy.get('#navBar').contains('Help');
		cy.get('#navBar').contains('About');

		//Import Section
		cy.get('#FileSelector');
		cy.get('#inputLabel');
		cy.get('#fileUploadSpan');
		cy.get('#progress');
		cy.get('#bar').contains('0%');
		cy.get('#UploadButton');

		// Upload Section
		cy.get('#FileSelector').should('have.class', 'csv-input');
		cy.get('#UploadButton');
		cy.get('#hitlistButton');

		//Footer
		cy.get('#footer').contains('©').contains('Infrared Spectra Comparison Interface');
	});

	// Hitlist Page
	it('Hitlist Page Render', function () {
		cy.get('#navBar').contains('Hitlist').click()
			.url().should('include', '/hitlist');
		cy.contains('Please Upload Files');
	});

	// About Page
	it('About Page Render', function () {
		cy.get('#navBar').contains('About').click()
			.url().should('include', '/about');
		cy.get('#About').contains('About');
	});

	// Help Page
	it('Help Page Render', function () {
		cy.get('#navBar').contains('Help').click()
			.url().should('include', '/help');
		cy.get('#Help').contains('Help');

		// Uploading Files
		cy.get('.nav-item').contains('Uploading Files').click();
		cy.get('#left-tabs-example-tabpane-1').find('video').should('have.attr', 'poster').should('include', 'uploadFiles.gif');
		cy.get('.tab-content').contains('Selecting a file and holding "Ctrl" + "Click" allows for multiple file selection.');

		// Viewing Hitlist
		cy.get('.nav-item').contains('Viewing Hitlist').click();
		cy.get('#left-tabs-example-tabpane-2').find('video').should('have.attr', 'poster').should('include', 'viewHitlist.gif');
		cy.get('.tab-content').contains('Click on the blue bar with the name of the file you wish to graph.');

		// Selecting A New Query
		cy.get('.nav-item').contains('Select A New Query').click();
		cy.get('#left-tabs-example-tabpane-3').find('video').should('have.attr', 'poster').should('include', 'selectNewQuery.gif');
		cy.get('.tab-content').contains('Click the drop-down-box to select a new query.');

		//Selecting New Files
		cy.get('.nav-item').contains('Selecting New Files').click();
		cy.get('#left-tabs-example-tabpane-4').find('video').should('have.attr', 'poster').should('include', 'selectingNewFiles.gif');
		cy.get('.tab-content').contains('Click "Home" to return to the "Upload" page.');

		cy.get('.nav-item').contains('Saving Results').click();
		cy.get('#left-tabs-example-tabpane-5').find('video').should('have.attr', 'poster').should('include', 'savingResults.gif');
		cy.get('.tab-content').contains('Click "Save Results"');

		cy.get('.nav-item').contains('Saving Graph').click();
		cy.get('#left-tabs-example-tabpane-6').find('video').should('have.attr', 'poster').should('include', 'savingGraphs.gif');
		cy.get('.tab-content').contains('Hover your mouse to the top of graphing area.');

		cy.get('.nav-item').contains('Closing Graph').click();
		cy.get('#left-tabs-example-tabpane-7').find('video').should('have.attr', 'poster').should('include', 'closingGraphs.gif');
		cy.get('.tab-content').contains('Clicking the red "X" will remove the result from the Hitlist.');
	});

	it('Navigation', function () {

		//Test Upload Navigation
		cy.get('#navBar').contains('Upload').click().url().should('include', '/');
		cy.get('#navBar').contains('Upload').click().url().should('include', '/');
		cy.get('#navBar').contains('Hitlist').click().url().should('include', '/hitlist');
		cy.get('#navBar').contains('Upload').click().url().should('include', '/');
		cy.get('#navBar').contains('Help').click().url().should('include', '/help');
		cy.get('#navBar').contains('Upload').click().url().should('include', '/');
		cy.get('#navBar').contains('About').click().url().should('include', '/about');
		cy.get('#navBar').contains('Upload').click().url().should('include', '/');

		//Test Hitlist Navigation
		cy.get('#navBar').contains('Hitlist').click().url().should('include', '/hitlist');
		cy.get('#navBar').contains('Upload').click().url().should('include', '/');
		cy.get('#navBar').contains('Hitlist').click().url().should('include', '/hitlist');
		cy.get('#navBar').contains('Help').click().url().should('include', '/help');
		cy.get('#navBar').contains('Hitlist').click().url().should('include', '/hitlist');
		cy.get('#navBar').contains('About').click().url().should('include', '/about');
		cy.get('#navBar').contains('Hitlist').click().url().should('include', '/hitlist');
		cy.get('#navBar').contains('Hitlist').click().url().should('include', '/hitlist');

		//Tests About Navigation
		cy.get('#navBar').contains('About').click().url().should('include', '/about');
		cy.get('#navBar').contains('Upload').click().url().should('include', '/');
		cy.get('#navBar').contains('About').click().url().should('include', '/about');
		cy.get('#navBar').contains('Hitlist').click().url().should('include', '/hitlist');
		cy.get('#navBar').contains('About').click().url().should('include', '/about');
		cy.get('#navBar').contains('Help').click().url().should('include', '/help');
		cy.get('#navBar').contains('About').click().url().should('include', '/about');
		cy.get('#navBar').contains('About').click().url().should('include', '/about');

		//Tests Help Navigation
		cy.get('#navBar').contains('Help').click().url().should('include', '/help');
		cy.get('#navBar').contains('Upload').click().url().should('include', '/');
		cy.get('#navBar').contains('Help').click().url().should('include', '/help');
		cy.get('#navBar').contains('Hitlist').click().url().should('include', '/hitlist');
		cy.get('#navBar').contains('Help').click().url().should('include', '/help');
		cy.get('#navBar').contains('About').click().url().should('include', '/about');
		cy.get('#navBar').contains('Help').click().url().should('include', '/help');
	});
});