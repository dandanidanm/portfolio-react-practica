import React, { Component } from 'react'
import styled from 'styled-components'


const AboutStyle = styled.div`
text-align: center;`;

const AboutAvatar = styled.div`
padding: 2em 0 0 0;`;

const AboutImg = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 2px solid #3F51B5;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0,0.6);
`;

const AboutName = styled.div`
    text-align: center;
`;

const AboutProfession = styled.p`
    margin: .2em 0 1em 0;
    letter-spacing: 1.6px;
    font-weight: 300;
    color: #448AFF;
`;

const AboutBio = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 300;
`;



export default class CardPortfolio extends Component {
    render() {
        return (
            <div>
                 <div>
        <AboutStyle>
          <div className="About-container">
            <AboutAvatar>
              <figure>
                <AboutImg src="https://media.istockphoto.com/photos/icon-of-a-businessman-avatar-or-profile-pic-picture-id474001892?s=612x612" alt="mi foto"/>
              </figure>
            </AboutAvatar>
            <AboutName>
                <h1>Daniel Molina</h1>
            </AboutName>
            <AboutProfession>
                <p>Estudiante Academia Geek</p>
            </AboutProfession>            
            <AboutBio>
                <p>Colombia</p>
            </AboutBio>
            <div className="About-social">
                Redes sociales
            </div>
          </div>
        </AboutStyle>            
        </div>
            </div>
        )
    }
}
