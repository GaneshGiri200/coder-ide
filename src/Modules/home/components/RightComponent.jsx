import React from 'react';
import styled from 'styled-components';

const StyledRightComponent = styled.div`
    width: 70%;
    background-color: #fff;
    height: 100vh;
    float: right;
`

function RightComponent() {
  return (
    <StyledRightComponent>
      Hello 
    </StyledRightComponent>
  )
}

export default RightComponent