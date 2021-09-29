import React from "react";
import styled from "styled-components";
import Section from "./Section";
import Video from "./Video";

function Home() {
  return (
    <div>
     <Video/>
     <Section/>
     <Section
     title="Model y"
     description = "Order Online Touchless Delivery"
     leftBtnText="custom order"
     rightBtnText="existing inventory"
     backgroundImg = "image-3.jpg"
     />
    </div>
  );
}

export default Home;


