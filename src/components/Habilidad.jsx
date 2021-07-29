import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Habilidad extends Component {
    render() {
        return (
            <div className="container px-4">
                <h2>HABILIDADES</h2>
                <div className="row g-2">
                    <div className="col-6">
                        <div className="p-3 border bg-light">
                            <span>HTML</span>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" 
                                role="progressbar" 
                                style={{ width: "50%" }}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-3 border bg-light">
                            <span>CSS</span>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" 
                                role="progressbar" 
                                style={{ width: "50%" }}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-3 border bg-light">
                            <span>JavaScript</span>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" 
                                role="progressbar" 
                                style={{ width: "50%" }}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-3 border bg-light">
                            <span>ReactJS</span>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" 
                                role="progressbar" 
                                style={{ width: "50%" }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
