import React ,{useState}from 'react'
import styled from "@emotion/styled"
import { abbreviateNumber } from 'js-abbreviation-number'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

const Container = styled.div`
width: 300px;
/* border-radius: 10px; */
`
const Image = styled.img`
height: 200px;
width: 100%;
background-color: white;
border-radius: 10px;
`
const Hold = styled.div`
display: flex;
`
const UserAvatar = styled.div`
height: 50px;
width: 50px;
border-radius: 50%;
background-color: red;
margin-right: 10px;
`
const TextHold = styled.div`
width: 220px;
overflow: hidden;
`
const CardHold = styled.div``
const VideoLength = styled.div`
  position: absolute;
  bottom: 80px;
  right: 10px;
  background-color: rgba(0,0,0,0.8);
  height: 30px;
  width: 70px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface iCard{
  title:string
  props:any
}

const Cards:React.FC<iCard> = ({title,props}) => {
  const [show,setShow] = useState(false)
  const [indexed,setIndexed] = useState("")
  console.log(indexed)
  return (
    <Container>
      <CardHold
      onMouseOver={()=>{
        setShow(false)
        setIndexed(props?.video?.videoId)
      }}
      onMouseLeave={()=>{
        setShow(false)
      }}
      title={title}
      >
        {show && indexed === props?.video?.videoId?(
          <ReactPlayer
          playing={true}
          width={300}
          height={200}
          styled={{
            height:"150px",
            width:"100%"
          }}
          url={`https://www.youtube.com/watch?v=${props?.video?.videoId}`}
          />
        ):(
<Image className='img' src={props?.video?.thumbnails[0]?.url}/>
        )}
        <VideoLength>
          {props?.video?.lengthText}
        </VideoLength>
        
        <Hold>
            <UserAvatar/>
            <Link
            style={{
              textDecoration:"none",color:"white"
            }}
            to={`/watch/${props?.video?.videoId}`}>
<TextHold>
  {props?.video?.title}
  </TextHold>
            </Link>
            <div>
              {abbreviateNumber(Number(props?.video?.viewCountText
                ?.split("")[0]
                ?.split(",")
                ?.join("")
                )
                )}
            </div>
                <div></div>
            
        </Hold>
        </CardHold>
    </Container>
  )
}

export default Cards