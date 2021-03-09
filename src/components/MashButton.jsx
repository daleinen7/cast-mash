import React from 'react';
import styled from 'styled-components';
import tmdblogo from '../static/images/tmdblogo.svg'; 

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
  margin-bottom: 20px; 
   @media (max-width: 800px) {
    flex-direction: row;
	  width: 20%;
    font-size: 1rem; 

`

const MovieDb = styled.img`
    width: 100px; 
@media (max-width: 800px) {
	width: 20%;
	
`

export default function MashButton(props) {
  return (
    <>
      <Button onClick={props.handleClick}>Mash</Button>
      <br />
      <p style={{ color: "#fff", fontFamily: "Sora", fontSize: ".7rem", backgroundColor: "#000" }}>Matching capabilities provided by The Movie Database <br />
        <a href="https://www.themoviedb.org/?language=en-US"><MovieDb src={tmdblogo} ></MovieDb></a><br />
      This product uses the <a href="https://www.themoviedb.org/?language=en-US" style={{color: "teal"}}>TMDb</a> API but is not endorsed or certified by TMDb.</p>
      </>
  )
}