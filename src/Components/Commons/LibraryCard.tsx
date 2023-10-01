import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
width: 250px;
height: 300px;
`
const Image = styled.img`
width: 100%;
height: 200px;
background-color: red;
`
const Hold = styled.div``
const First = styled.div`
display: flex;
gap: 5px;
`
const H3 = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const H6 = styled.div``
const IconHold = styled.div`
margin-top: 3px;
`
const Second = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 60px;
`

interface ihistory{
    avatar:string,
    title:string,
    text:string,
    icon:any
    views:string,
    time:string
}

const LibraryCard:React.FC<ihistory> = ({avatar, title, text, icon, views, time}) => {
  return (
    <Container>
        <Image src={avatar}/> 
        <Hold>
            <H3>{title}</H3>
            <First>
                <H6>{text}</H6>
                <IconHold>{icon}</IconHold>
            </First>
            <Second>
                <div>{views}</div>
                <p>{time}</p>
            </Second>
        </Hold>
    </Container>
  )
}

export default LibraryCard