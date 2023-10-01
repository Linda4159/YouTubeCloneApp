import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
width: 550px;
height: 200px;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`
const Image = styled.img`
width: 250px;
height: 100%;
background-color: red;
`
const Hold = styled.div`
font-size: medium;
margin-bottom: 100px;
line-height: 20px;

`
const H4 = styled.h4``
const View = styled.div`
/* padding-bottom: 20px; */
`


interface Ilib{
avatar:string,
title:string,
views:string,
text:string
}

const HistoryCard :React.FC<Ilib>= ({avatar, title, views, text}) => {
  return (
    <Container>
        <Image src={avatar}/>
        <Hold>
            <H4>{title}</H4>
            <View>{views}</View>
            <p>{text}</p>
        </Hold>
    </Container>
  )
}

export default HistoryCard