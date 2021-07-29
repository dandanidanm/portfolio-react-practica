import React, { Component } from 'react'
import styled from 'styled-components'


const PerfilStyle = styled.div`
text-align: center;
background-color:#c3c3c3;
`;

const PerfilAvatar = styled.div`
padding: 2em 0 0 0;`;

const PerfilImg = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 2px solid #3F51B5;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 20px rgba(0,0,0,0.6);
`;

const PerfilName = styled.div`
    text-align: center;
`;

const PerfilProfession = styled.p`
    margin: .2em 0 1em 0;
    letter-spacing: 1.6px;
    font-weight: 300;
    color: #448AFF;
`;

const PerfilBio = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 300;
`;

const PerfilLocation = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 400;
`;


export default class CardPortfolio extends Component {
    render() {
        return (
            <div>
                 <div>
        <PerfilStyle>
          <div className="Perfil-container">
            <PerfilAvatar>
              <figure>
                <PerfilImg src="https://media.istockphoto.com/photos/icon-of-a-businessman-avatar-or-profile-pic-picture-id474001892?s=612x612" alt="mi foto"/>
              </figure>
            </PerfilAvatar>
            <PerfilName>
                <h1>Daniel Molina</h1>
            </PerfilName>

            <PerfilBio>
                <p>FrontEnd Developer</p>
            </PerfilBio>

            <PerfilProfession>
                <p>Estudiante Academia Geek</p>
            </PerfilProfession>     

            <PerfilLocation>
                <p>Colombia</p>
            </PerfilLocation>
    
          </div>
        </PerfilStyle>            
        </div>
            </div>
        )
    }
}
