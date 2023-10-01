import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { VideoDetail } from "../utils/ApiCall";
import { GoKebabHorizontal } from "react-icons/go";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { VideoComments } from "../utils/ApiCall";
import pic from "../assets/headset.png"

const Container = styled.div`
  margin-top: 200px;
  width: 80%;
`;
const Vdeos = styled.iframe`
  height: 400px;
  width: 80%;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
`;
const H2 = styled.h2`
  width: 80%;
`;
const Hold = styled.div`
  display: flex;
`;
const UserAvatar = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  object-fit: contain;
  margin-right: 20px;
  object-fit: cover;
  /* background-color: red; */
  /* margin-bottom: 10px; */
`;
const TextHold = styled.div`
  line-height: 10px;
  height: 50px;
`;
const Group = styled.div`
  width: 80%;
  height: 80px;
  /* background-color: blue; */
  display: flex;
  justify-content: space-around;
  /* overflow: hidden; */
  margin-bottom: 5px;
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 20px;
  background-color: white;
  color: black;
  font-weight: light;
`;
const ButtonHold = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  height: 40px;
  width: 150px;
  border-radius: 20px;
`;
const Icon = styled.div`
  /* background-color: red; */
`;
const Like = styled.div``;
const ButtA = styled.button`
  background-color: #404040;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px 0px 0px 20px;
  /* border:1px solid silver */
`;
const ButtB = styled.button`
  background-color: #404040;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 20px 20px 0px;
`;
const Dislike = styled.div``;
const ShareHold = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 20px;
  background-color: #3f3f3f;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  gap: 8px;
  /* background-color: 1f1f1f; */
`;
const MenuHold = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #404040;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Desc = styled.div`
  overflow: hidden;
  /* background-color:#3F3F3F;
width: 100%;
height: 100px;
border-radius: 5px; */
`;
const CommentHold = styled.div`
  margin-left: 65px;
  
`;
const AuthorName = styled.div`
  padding-top: 10px;
`;
const AuthorImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-top: 10px;
  object-fit: contain;
`;
const PubTime = styled.div`
  padding-top: 10px;
`;
const Com = styled.div`
  /* height: 100px; */
  width: 100%;
`;
const CommentLikes = styled.div`
  display: flex;
  width: 50px;
  height: 30px;
  background-color: gray;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 10px;
  
  margin-left: 65px;
`;
const Comment = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  /* justify-content:center; */
  /* align-items: center; */
`;

const Coms = styled.div``;

interface CommentInt {
  text: string;
  authorThumbnails: [];
  authorName:string;
  publishedTimeText:string;
  likes:string
}

const HdetailedPage: React.FC = () => {
  const [videoData, setVideoData] = useState<any>();
  const [videoComment, setVideoComment] = useState<any>([]);
  const { id } = useParams();
  // console.log(id)
  const RetrieveData = async () => {
    await VideoDetail(id).then((res) => {
      setVideoData(res?.videoDetails);
    });
  };
  useEffect(() => {
    RetrieveData();
  }, []);
  const FetchComments = async () => {
    await VideoComments(id).then((res) => {
      console.log("ivanna", res?.comments);
      setVideoComment(res?.comments);
    });
  };
  useEffect(() => {
    FetchComments();
  }, []);
  return (
    <Container>
      <Vdeos src={`https://www.youtube.com/embed/${videoData?.videoId}`} />
      <H2>{videoData?.title}</H2>
      <Hold>
      {/* videoData && videoData?.thumbnails && videoData?.thumbnails[0]?.url */}
        <UserAvatar
          src={pic}
        />
        <TextHold>
          <div>{videoData?.title}</div>
          <p>189 subscribers</p>
        </TextHold>
      </Hold>

      <Group>
        <Button>Subscribe</Button>
        <ButtonHold>
          <ButtA>
            <Icon>{<AiFillLike />}</Icon>
            <Like>198 </Like>
          </ButtA>
          <ButtB>
            <Dislike>2</Dislike>
            <Icon>{<AiFillDislike />}</Icon>
          </ButtB>
        </ButtonHold>
        <ShareHold>
          <Icon>{<FaShare />}</Icon>
          <p>Share</p>
        </ShareHold>
        <MenuHold>{<GoKebabHorizontal />}</MenuHold>
      </Group>
      {/* {videoDesc?.map(()=>(
        
      ))} */}
      <Desc>{videoData?.shortDescription}</Desc>
      {videoComment?.map((props:CommentInt) => (
        <>
          <Comment>
            <AuthorImg
              src={
                props &&
                props?.authorThumbnails &&
                props?.authorThumbnails[0]?.url
              }
            />
            <AuthorName>{props?.authorName}</AuthorName>
            <PubTime>{props?.publishedTimeText}</PubTime>
          </Comment>
          <CommentHold>
            <Com>
            {props?.text}
            </Com>
          </CommentHold>
          <CommentLikes>
            <Coms>{props?.likes}</Coms>
            <Icon>{<AiFillLike />}</Icon>
          </CommentLikes>
        </>
      ))}
    </Container>
  );
};

export default HdetailedPage;
