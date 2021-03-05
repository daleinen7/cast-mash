import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background: #7A63FF;
    border-radius: 15px;
    border: 3px solid #fff;
    padding: 10px 50px;
    margin-top: 20px;
    font-family: Sora;
    font-size: 24px;
    font-style: normal;
    font-weight: 600; 
    line-height: 45px; 
    letter-spacing: 0.04em;
    text-align: center;
    color: white;
    ${'' /* box-shadow: 5px 5px 5px 1px rgba(255, 255, 255, .3); */}

`

export default function MashButton(props) {
  return(
    <Button onClick={props.handleClick}>Mash</Button>
  )
}