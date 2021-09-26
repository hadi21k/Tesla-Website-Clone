import React from "react";
import Section from "./Section";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Section
        bgImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop"
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        bgImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70"
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftBtnText="Order Now"
        rightBtnText="Existing Inventory"
      />
      <Section
        bgImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/e90a341e-f9ca-4aa1-8eab-94afea118786/bvlatuR/std/2880x1800/M3-Homepage-D"
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        bgImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/325743a2-d187-4e28-91a3-5a2e47e317f7/bvlatuR/std/2880x1800/ModelX-Homepage-D"
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        bgImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D"
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        bgImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/27ae57a3-3a1d-480c-b557-cd9caf51b96e/bvlatuR/std/2880x1620/solar-roof-hero-desktop?quality=70"
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        leftBtnText="Custom Order"
        rightBtnText="Learn More"
      />
      <Section
        bgImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/2880x2400/Desktop-Accessories"
        title="Accessories"
        leftBtnText="Shop Now"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
