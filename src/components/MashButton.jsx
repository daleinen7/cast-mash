import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background: #7A63FF;
    border-radius: 31px;
    font-family: Sora;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 45px;
    letter-spacing: 0.04em;
    text-align: center;
    color: white;
    width: 120px;
    height: 91px;
`

export default function MashButton(props) {
  return(
    <Button onClick={props.handleClick}>Mash</Button>
  )
}