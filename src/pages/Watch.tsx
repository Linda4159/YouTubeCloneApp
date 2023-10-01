import React from "react"
import styled from "@emotion/styled"
import { BiDotsVerticalRounded } from "react-icons/bi"


const Container = styled. div``
const H1 = styled.h1``
const IconHold = styled.div`
    font-size: 20px;
    background-color: gray;
    padding: 10px;
    border-radius: 50px;
    width: 30px;
`




const Watch:React.FC=()=>{
    return(
        <Container>
            <H1>Watch Later</H1>
            <IconHold>{<BiDotsVerticalRounded/>}</IconHold>
        </Container>
    )
}

export default Watch