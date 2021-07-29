import React, { Component } from 'react'
import CardPortfolio from './CardPortfolio'
import Social from './Social'
import Habilidad from './Habilidad'
import Education from './Education'


export default class portfolio extends Component {
    render() {
        return (
            <div>
                <CardPortfolio />
                <Social />
                <Education />
                <Habilidad />
            </div>
        )
    }
}
