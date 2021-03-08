import React from 'react';
import styled from 'styled-components';
import footlogo from '../static/images/footerlogo.png';

const FootSpan = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
  display: flex;
  flex-direction: row;
  align-items: center; 
  justify-content: space-between; 
  color: #fff;
  background-color: #C5C5C5;
  width: 100vw;
  text-align: left:
  @media (max-width: 800px) {
    flex-direction: column;
	  width: 100vw;
`;

const Image = styled.img`
  width: 416px;
  height: 133px; 
  @media (max-width: 800px) {
	  height: 50%;
    width: 50%; 
`

const Copyright = styled.div`
  right: 10px; 
  font-family: Sora;
  font-size: 1rem;
  padding: 20px;
  @media (max-width: 800px) {
	  font-size: .5rem;
    right: 0; 
`

export default function Footer(props) {
    return (
        <FootSpan>
            <Image src={footlogo} />
            <Copyright>Copyright Castmash</Copyright>
        </FootSpan>
        
        )
}