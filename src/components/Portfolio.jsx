import React, { Component } from 'react'
import CardPortfolio from './CardPortfolio'
import Social from './Social'
import Habilidad from './Habilidad'


export default class portfolio extends Component {
    render() {
        return (
            <div>
                <CardPortfolio />
                <Social />
                <Habilidad />
            </div>
        )
    }
}
