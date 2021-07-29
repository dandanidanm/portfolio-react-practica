import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Education extends Component {
    render() {
        return (
            <div>
                <div className="border border-danger container px-4">
                    <h2 className="text-primary">M i s E s t u d i o s</h2>
                    <div>
                        <h3>PCJIC - 2016</h3>
                        <div>
                            <p className="text-secondary">Ingeniero Informático</p>
                        </div>
                        <h3>EAFIT - 2020</h3>
                        <div>
                        <p className="text-secondary">Magister en Ingeniería de Software</p>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="border border-info container px-4">
                    <h2 className="text-primary">Experiencia</h2>
                    <div>
                        <h3>Coordinador Geek</h3>
                    </div>
                    <div>
                        <p className="text-secondary">Desarrolando Personal en geek Academy</p>
                    </div>
                </div>
                <br></br>
                <div className="border border-warning container px-4">
                <h2 className="text-primary">Certificación</h2>
                <div>
                    <h3>Google Cloud Plataform</h3>
                </div>
                </div>
                </div>
        )
    }
}