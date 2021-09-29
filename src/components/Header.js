import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Container>
      <a href="/">
        <img src="/images/logo.png" alt="" />
      </a>

      <ul>
        <a href="/">
          <li>FALCON 9</li>
        </a>
        <a href="/">
          <li>FALCON HEAVY</li>
        </a>
        <a href="/">
          <li>DRAGON</li>
        </a>
        <a href="/">
          <li>STARSHIP</li>
        </a>
        <a href="/">
          <li>HUMAN SPACEFLIGHT</li>
        </a>
        <a href="/">
          <li>RIDESHARE</li>
        </a>
      </ul>
      <i class="bx bx-menu" style={{ color: "white" }}></i>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  font-family: 'D-DIN Exp';
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  
  height: 100px;
  width: 100%;
  position: fixed;
 
  @media (max-width: 768px){
    height: 60px;
  }
  
  /* background-color: black; */
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    @media (max-width: 768px){
      display: none;
    }
    @media (max-width: 1024px){
    display: none;
  }
  }
  a {
    li {
      list-style: none;
      color: white;
      margin: 0 15px;
    }

    img {
      width: 200px;
      margin: 0 100px;
      @media (max-width: 1024px){
        width: 150px;
        
        margin: 0;
      }
    }
  }
  i {
    margin: 0 100px;
    font-size: 27px;
    @media (max-width: 1024px){
      font-size: 20px;
      position: fixed;
      right: 30px;
      margin: 0;
    }
  }
`;
