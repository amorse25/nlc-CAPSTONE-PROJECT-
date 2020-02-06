/***** This component is a child of <UploadPage />. Responsible for rendering elements allowing the
 *     user to select files (HTML element <input>) and "Upload" button.  *****/

import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'

class FileReader extends Component {

	render() {
		return (
			<div className="App">
				<div id='inputSpacer'>
                <label id='inputLabel'>
                <input
					id="FileSelector"
					className='csv-input'
					type='file'
					multiple
					accept='.csv'
					ref={this.props.AppRef}
					name='file'
					placeholder={null}
					onChange={this.props.handleChange}
				/>
                    <span id='fileUploadSpan'>Choose your CSV Files</span>
                </label>
				</div>
				<div className='row justify-content-center'> 
					<div>
						<Button id={'UploadButton'} variant="info" onClick={this.props.importCSV} >Upload Files</Button>
						{' '}
						<Button id={'hitlistButton'} variant="info" onClick={this.props.routeChange} >View Hitlist</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default FileReader;