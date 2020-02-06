/***** This component is rendered upon navigation to localhost:3000/help. Responsible for displaying
 *       a detailed guide on how to use the application.         *****/

import React, {Component} from 'react';
import Footer from '../Footer';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class HelpPage extends Component {



	render() {
		return (
			<div id={'Help'}>
				<div id="extraBody">
					<h1>Help</h1>
					<Tab.Container id="left-tabs-example" defaultActiveKey="first">
						<Row>
							<Col sm={3}>
							<Nav variant="pills" className="flex-column">
								<Nav.Item>
									<Nav.Link eventKey="1">Uploading Files</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="2">Viewing Hitlist</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="3">Select A New Query</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="4">Selecting New Files</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="5">Saving Results</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="6">Saving Graphs</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="7">Closing Graphs</Nav.Link>
								</Nav.Item>
							</Nav>
							</Col>
							<Col sm={9}>
							<Tab.Content>
								<Tab.Pane eventKey="1">
									<video poster="./uploadFiles.gif"/>
									<p>
										Click “Choose Your CSV Files”
									</p>
									<p>
										Selecting a file and holding "Ctrl" + "Click" allows for multiple file selection.
									</p>
									<p>
										Selecting all files in a folder: Select one file, press "Ctrl" + "a". 
									</p>
									<p>
										Quick selecting a batch of files: Select the first file you wish to upload. Press "Shift" + "Click" on the last file you wish to upload. This will select all files in between the first and last.
									</p>
									<p>
										Click "Upload" (By default, the first file will be selected as the Query. This can be changed after clicking "View Hitlist")
									</p>
									
								</Tab.Pane>
								<Tab.Pane eventKey="2">
									<video poster="./viewHitlist.gif"
									width='1000'/>
									<p>
										Click "View Hitlist"
									</p>
									<p>
										Click on the blue bar with the name of the file you wish to graph.
									</p>
								</Tab.Pane>
								<Tab.Pane eventKey="3">
									<video poster="./selectNewQuery.gif"/>
									<p>
										Click the drop-down-box to select a new query.
									</p>
									<p>
										Select your new query by clicking the file name
									</p>
								</Tab.Pane>
								<Tab.Pane eventKey="4">
									<video poster="./selectingNewFiles.gif"/>
									<p>
										Important Note: When visiting the "Upload" page or by clicking "Home" from the "View Hitlist" page, your session is restarted. However, you can still
										visit the "About" or "Help" page and return back to view your Hitlist without losing data. 
									</p>
									<p>
										Click "Home" to return to the "Upload" page.
									</p>
									<p>
										Select your new files.
									</p>
								</Tab.Pane>
								<Tab.Pane eventKey="5">
									<video poster="./savingResults.gif"/>
									<p>
										Click "Save Results"
									</p>
									<p>
										The browser will save your results in the "Download" section. You can view or save to your local machine before exiting the application. 
									</p>
								</Tab.Pane>
								<Tab.Pane eventKey="6">
									<video poster="./savingGraphs.gif"/>
									<p>
										Click your chosen graph to expand the selected match. 
									</p>
									<p>
										Hover your mouse to the top of graphing area.
									</p>
									<p>
										Options will appear. Select the icon that resembles a camera.
									</p>
									<p>
										This will then prompt the option to view or save to local machine. 
									</p>
								</Tab.Pane>
								<Tab.Pane eventKey="7">
									<video poster="./closingGraphs.gif"/>
									<p>
										Clicking on the blue bar in your Hitlist results expands that given match to view the graphs. 
									</p>
									<p>
										If it is open, you may click the same bar to minimize it. You may also select the blue "-" to minimize the graphs.
									</p>
									<p>
										Clicking the red "X" will remove the result from the Hitlist.
									</p>
									<p>
										Removing (Closing) graphs can help strategically place results closer to eachother to help compare differences. 
									</p>
								</Tab.Pane>
							</Tab.Content>
							</Col>
						</Row>
						</Tab.Container>


				</div>
				<Footer></Footer>
			</div>
		);
	}
}

export default HelpPage;