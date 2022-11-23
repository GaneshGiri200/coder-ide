import React from 'react';
import styled from 'styled-components';
import Logo from '../../../assets/Logo.svg';
import {FaPlus} from 'react-icons/fa';

const StyledLeftComponent = styled.div`
    width: 30%;
    background-image: radial-gradient(circle, #3d5d74, #3d5d74, #3d5d74, #3c5d74, #3c5d74, #3c5b71, #3b5a6f, #3b586c, #3a5466, #395060, #384d5b, #374955);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
`

const ContentContainer = styled.div`
    width: 80%;
    /* background-color: pink; */
    text-align: center;
    height: 300px;
    color: #FFF;
    letter-spacing: 1px;

    h1 {
        margin-top: 20px;
        font-size: 2.4rem;
        font-weight: 500;
    }

    img {
        /* width: 100px; */
        height: 100px;
    }

    button {
        font-size: 1em;
        /* background-color:#B05C97; */
        background-color: #05BAF9;
        margin: 1em;
        padding: .6em 1em;
        border-radius: 10px;
        border: none;
        color: #333;
        font-weight: 500;
        cursor: pointer;
        /* border: 1px solid #FFF; */
    }
`


function LeftComponent() {
  return (
    <StyledLeftComponent>
        <ContentContainer>
        <img src={Logo} alt="Logo"/>
        <h1>Coder IDE</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit!</p>
        <button>
            <FaPlus/> Create New Environment
        </button>
        </ContentContainer>
    </StyledLeftComponent>
  )
}

export default LeftComponent