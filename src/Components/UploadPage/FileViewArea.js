/***** This component is responsible for displaying a dropdown box to the user containing their
 *     uploaded files. This component only renders on the home page (Upload page) and will update
 *     based on changes in files uploaded to the system.                                
 *  *****/

import React, { Component } from 'react';

/***** Global Variable *****/
var names = [];         //Stores the names of given spectra files

class FileViewArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.AppState.counter,
            spectra: this.props.AppState.spectra,
        }
    }
    render() {
        var content = <h2>Please upload files</h2>;
        var id = "hidden"
        let options = undefined;
        
        // if files > 0 - and - length of names of files > 0
        if (this.state.counter > 0 && Object.keys(this.state.spectra).length > 0) {

            // Title that gets rendered
            content = <h2>Uploaded files: </h2>;
            id = "ViewId"
            
            // Store names of files
            names = Object.keys(this.state.spectra);
            options = names.map((name, i) => {
                return (
                    <option key={i} value={i}>
                    {" "}
                    {name}{" "}
                </option>
                )
            });
        };
            return (
                <div id='UploadedFiles'>
                    <p>{content}</p>
                    <div className="ViewArea" id={id}>
                        <select id='uploaded-files'>
                            <option selected disabled>Uploaded Files</option>
                            {options}
                        </select>

                    </div>
                </div>
            );
        }
    };

export default FileViewArea;