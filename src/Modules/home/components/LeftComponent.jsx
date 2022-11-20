import React from 'react';
import styled from 'styled-components';
import Logo from '../../../assets/Logo.svg'

const StyledLeftComponent = styled.div`
    width: 30%;
    background-color: #374955;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`
const ContentContainer = styled.div`
    width: 80%;
    /* background-color: pink; */
    text-align: center;
    height: 300px;
    color: #FFF;
    letter-spacing: 1px;

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
        border-radius: 5px;
        border: none;
        color: #333;
        font-weight: 500;
        /* border: 1px solid #FFF; */
    }
`


function LeftComponent() {
  return (
    <StyledLeftComponent>
        <ContentContainer>
        <img src={Logo} alt="Logo"/>
        <h2>CODER IDE</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit!</p>
        <button>
            <i className="fa fa-plus" aria-hidden="true"></i> &nbsp;
            Create New Environment
        </button>
        </ContentContainer>
    </StyledLeftComponent>
  )
}

export default LeftComponent