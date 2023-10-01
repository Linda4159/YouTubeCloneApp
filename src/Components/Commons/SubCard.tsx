import React from "react";
import styled from "@emotion/styled";

const Container = styled.div``;
const First = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
  border-radius: 50%;
  margin-top: 70px;
`;
const Second = styled.div`
  /* display: flex; */
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  line-height: 10px;
`;
const Button = styled.button`
margin-top: 20px;
margin-left: 50px;
border-radius: 30px;
`;

interface iSub {
  avatar: string;
  name: string;
  text: string;
}

const SubCard: React.FC<iSub> = ({ avatar, name, text }) => {
  return (
    <Container>
      <First>
        <img src={avatar} />
      </First>
      <Second>
        <h3>{name}</h3>
        <div> {text}</div>
      </Second>
      <Button>Subcribe</Button>
    </Container>
  );
};

export default SubCard;
