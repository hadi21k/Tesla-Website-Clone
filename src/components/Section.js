import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import ArrowDownImg from "../assets/down-arrow.svg";
const Section = ({ title, description, leftBtnText, rightBtnText, bgImg }) => {
  return (
    <div
      className="section"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <Text>
        <Fade left>
          <h3>{title}</h3>
          <p>{description}</p>
        </Fade>
      </Text>
      <Buttons>
        <GroupButton>
          <Fade bottom>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText ? <RightButton>{rightBtnText}</RightButton> : ""}
          </Fade>
        </GroupButton>
        <ArrowDown src={ArrowDownImg} />
      </Buttons>
    </div>
  );
};

export default Section;

const Text = styled.div`
  text-align: center;
  font-weight: 600;
  padding: 120px 0;
  h3 {
    font-size: 3rem;
  }
  p {
    font-size: 1rem;
    margin-top: 8px;
  }
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const GroupButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const ArrowDown = styled.img`
  height: 50px;
  margin-down: 10px;
  animation: UpDown infinite linear 1.5s;
`;
const LeftButton = styled.div`
  display: flex;
  width: 250px;
  align-items: center;
  justify-content: center;
  padding: 15px 35px;
  border-radius: 20px;
  opacity: 0.85;
  font-weight: 600;
  background: #181b21;
  color: white;
  margin: 10px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
`;
const RightButton = styled(LeftButton)`
  background: white;
  color: #181b21;
  opacity: 0.7;
`;
