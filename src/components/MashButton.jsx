import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: #7A63FF;
  border-radius: 30px;
  width: 265px;
  height: 65px; 
  font-family: Sora;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #FFFFFF;
  text-transform: uppercase;
  border: 0;
   @media (max-width: 800px) {
    flex-direction: row;
	  width: 20%;
    font-size: 1rem; 

`

export default function MashButton(props) {
  return (
    
    <Button onClick={props.handleClick}>Mash</Button>
  )
}