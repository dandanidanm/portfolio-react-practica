import React, { Component } from 'react'
import styled from 'styled-components'

const Social = styled.div`
display: flex;
justify-content:center;
align-item:center;
`
const Icons = styled.a`
color:#000;
margin:1rem;
font-size:2rem;
`

export default class social extends Component {
    render() {
        return (
            <Social>
                <Icons href="#"><i class="fab fa-facebook-square"></i></Icons>
                <Icons href="#"><i class="fab fa-instagram-square"></i></Icons>
                <Icons href="#"><i class="fab fa-twitter-square"></i></Icons>
                <Icons href="#"><i class="fab fa-github-square"></i></Icons>
            </Social>
        )
    }
}
