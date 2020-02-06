/***** This component is rendered upon navigation to localhost:3000/about. Responsible for displaying
 *       a detailed description of the NLC algorithm and its benefits against the Pearson Correlation. *****/

import React, {Component} from 'react';
import Footer from '../Footer';

class AboutPage extends Component {

	render() {
		return (
			<div id={'About'}>
				<div id="extraBody">
					<h1>About</h1>
					<div>Infrared Spectroscopy is a technique with a wide range of applications, from identifying
						unknown materials to verifying the quality of a sample, and is useful to fields such as
						analytical chemistry, pharmacology, and forensic science, among others. An infrared spectra
						comparison interface is necessary for processing and normalizing high volumes of spectra data
						and reliably providing chemists, researchers, and other professionals with potential matches
						within a set of samples they submit, as well as the degree of certainty. Additionally, this
						application will display the output graphically for easy visualization.
					</div>
					<div>The Infrared Spectra Comparison Interface is a single-page web application that will utilize
						the Normalized Local Change (NLC) algorithm to identify the closest possible matches within
						user-submitted IR Spectra data for various chemical compounds.
					</div>

				</div>
				<Footer></Footer>
			</div>
		);
	}

}

export default AboutPage;