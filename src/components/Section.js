import React from "react";
import styled from "styled-components";
function Section(
    title,
    description,
    leftBtnText,
    rightBtnText,
    backgroundImg,
) {
  return (
    <Wrap bgImage={backgroundImg}>
      <div className="bottomContainer">
        <h2>COMPLETED MISSION</h2>
        <h1>DRAGON RETURNS TO EARTH</h1>
        <DeH>{description}</DeH>
        <div className="box">REWATCH</div>
      </div>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  background-image: ${(props) => `url("/images/${props.bgImage}")`};

  /* overflow-x: hidden; */
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: left;
  align-items: flex-end;
  .bottomContainer {
    
    z-index: 10;
    
    text-align: left;
    bottom: 200px;
    ;
    margin-left: 100px;
    margin-bottom: 100px;
    color: white;
    width: 50%;
    max-width: 520px;
    @media (max-width: 768px) {
      left: 20px;
      overflow-wrap: normal;
      bottom: 30px;
      width: 80%;
    }
    h2 {
      font-family: "D-DIN";
      font-size: 24px;
      margin-bottom: 5px;
      @media (max-width: 768px) {
        font-size: 21px;
      }
    }
    h1 {
      /* color: black; */
      font-family: "D-DIN Exp";
      font-weight: 900;
      font-size: 48px;
      @media (max-width: 768px) {
        font-size: 38px;
      }
      /* line-height: 48px; */
      /* letter-spacing: -3px; */
    }
    h3 {
      font-family: "D-DIN";
      font-size: 18px;
      margin: 20px 0;
      font-weight: 400;
    }
    .box {
      border: 2px solid white;
      width: 150px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "D-DIN Exp";
      transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
      cursor: pointer;
      &:hover {
        background-color: white;
        color: black;
      }
    }
  }
`;
const DeH = styled.h3``