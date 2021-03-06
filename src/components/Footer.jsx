import React from 'react';
import styled from 'styled-components';
import footlogo from '../static/images/footerlogo.png';

const FootSpan = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; 
  justify-content: space-between; 
  color: #fff;
  margin: 0;
  left: 0; 
  bottom: 0;
  width: 100vw;
  text-align: left:
`;

const Image = styled.img`
  width: 416px;
  height: 133px; 
`

const Copyright = styled.div`
  right: 10px; 
  font-family: Sora;
  font-size: 1rem;
  padding: 20px; 
`

export default function Footer(props) {
    return (
        <FootSpan>
            <Image src={footlogo} />
            <Copyright>Copyright Castmash</Copyright>
        </FootSpan>
        
        )
}