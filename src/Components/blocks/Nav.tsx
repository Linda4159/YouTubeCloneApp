import React, { useContext } from "react";
import styled from "@emotion/styled";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsFillMicFill } from "react-icons/bs";
import ButtonReuse from "../Commons/ButtonReuse";
import { GlobalContext } from "../../Services/GlobalContext";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
`;
const Container = styled.div`
  height: 150px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* display: flex;
justify-content:space-around ;
align-items: center; */
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  gap: 20px;
  z-index: 10;
  background-color: #1f1f1f;
`;
const First = styled.div`
  display: flex;
  gap: 20px;
  font-size: 30px;
  font-weight: bolder;
  /* margin-left: 10px; */
`;
const Second = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const Last = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  gap: 30px;
`;
const Logo = styled.div`
  display: flex;
  gap: 5px;
`;
const Icon = styled.div`
  color: red;
`;
const Span = styled.div`
  font-size: 20px;
  padding-top: 5px;
`;
const InputHold = styled.div`
  height: 40px;
  width: 400px;
  border: 1px solid gray;
  border-radius: 20px;
  display: flex;
  align-items: center;
  /* padding: 10px; */
`;
const Input = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  outline: none;
  padding-left: 10px;
  color: white;
`;
const SearchIconHold = styled.div`
  background-color: #1f1f1f;
  height: 100%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
const MicHold = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Third = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;
const SignInHold = styled.div`
  width: 100px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #3ea6ff;
`;
const DotHold = styled.div`
  line-height: 10px;
  font-weight: bolder;
`;
const Hold = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Nav: React.FC = () => {
  const { ToggleSideBar } = useContext(GlobalContext);
  return (
    <Container>
      <Wrapper>
        <First>
          <Icon onClick={ToggleSideBar}>
            <AiOutlineMenu />
          </Icon>

          <Logo>
            <Icon>
              <AiFillYoutube />
            </Icon>
            <Span>YouTube</Span>
          </Logo>
        </First>
        <Second>
          <InputHold>
            <Input placeholder="Search" />
            <SearchIconHold>
              <BiSearch />
            </SearchIconHold>
          </InputHold>
          <MicHold>
            <BsFillMicFill />
          </MicHold>
          <Last></Last>
        </Second>
        <Third>
          <DotHold>
            <div>.</div>
            <div>.</div>
            <div>.</div>
          </DotHold>

          <SignInHold>
            <BsFillMicFill />
            <div>Sign In</div>
          </SignInHold>
        </Third>
      </Wrapper>
      <br />
      <br />
      <Hold>
        <ButtonReuse title="All" />
        <ButtonReuse title="Music" />
        <ButtonReuse title="Football" />
        {/* <ButtonReuse title='Highlight films'/> */}
        {/* <ButtonReuse title='Premier league'/> */}
        <ButtonReuse title="African music" />
        <ButtonReuse title="Sketch comedy" />
        <ButtonReuse title="Live" />
        <ButtonReuse title="Trailers" />
        <ButtonReuse title="Nollywood" />
        <ButtonReuse title="Champions league" />
        <ButtonReuse title="News" />
        <ButtonReuse title="History" />
        <ButtonReuse title="Variety shows" />
        <ButtonReuse title="Stages" />
        {/* <ButtonReuse title='Musical esembles'/> */}
        <ButtonReuse title="Rappings" />
        {/* <ButtonReuse title='Recently uploaded'/> */}
      </Hold>
    </Container>
  );
};

export default Nav;
