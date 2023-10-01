import React from 'react'
import styled from "@emotion/styled"

const Container = styled.div`
width: 400px;
height: 70vh;
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
`
const ImageCard = styled.div`
width: 100%;
height: 100%;
border-radius: 10px;
background-color: red;
`
const Card = styled.div``
const LikeHold = styled.div`
height: 45px;
width: 45px;
border-radius: 50%;
background-color: rgba(0,0,0,0.3);
display: flex;
justify-content: center;
align-items: center;
/* margin-bottom: 10px; */
`

const Span = styled.div`
padding-bottom: 10px;
`
const DislikeHold = styled.div`
height: 45px;
width: 45px;
border-radius: 50%;
background-color: rgba(0,0,0,0.3);
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 10px;
// `
const CommentHold = styled.div`
height: 45px;
width: 45px;
border-radius: 50%;
background-color: rgba(0,0,0,0.3);
display: flex;
justify-content: center;
align-items: center;
/* margin-bottom: 10px; */
`
const ShareHold = styled.div`
height: 45px;
width: 45px;
border-radius: 50%;
background-color: rgba(0,0,0,0.3);
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 10px;
`
const MenuHold = styled.div`
height: 45px;
width: 45px;
border-radius: 50%;
background-color: rgba(0,0,0,0.3);
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 10px;
`
const AvatarHold = styled.div`
height: 45px;
width: 45px;
border-radius: 10px;
background-color: rgba(0,0,0,0.3);
display: flex;
justify-content: center;
align-items: center;
`
interface iShortCards {
like:string,
icon:any
icon1:any
dislike:string,
icon3:any
icon4:any,
icon2:any,
avatar:string
comment:string

}

const ShortCards:React.FC<iShortCards> = ({like,dislike,icon1,icon2,icon,icon3,icon4,avatar,comment}) => {
  return (
    <Container>
        <ImageCard/>
        <Card>
           <LikeHold>
            {icon}
            </LikeHold> 
            <Span>{like}</Span>
            <DislikeHold>
            {icon1}
            </DislikeHold> 
            <Span>{dislike}</Span>
            <CommentHold>
            {icon2}
            </CommentHold> 
            <Span>{comment}</Span>
            <ShareHold>
            {icon3}
            </ShareHold> 
            <MenuHold>
            {icon4}
            </MenuHold> 
            <AvatarHold>
            {avatar}
            </AvatarHold> 
        </Card>
    </Container>
  )
}

export default ShortCards