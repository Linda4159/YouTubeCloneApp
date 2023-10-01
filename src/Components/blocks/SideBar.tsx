import React, { useContext } from 'react'
import styled from '@emotion/styled'
import {AiFillHome, AiFillYoutube, AiOutlineSetting}from "react-icons/ai"
import NavReuse from '../Commons/NavReuse'
import {MdOutlineWatchLater, MdSubscriptions,MdOutlineFeedback} from "react-icons/md"
import {MdOutlineVideoLibrary} from "react-icons/md"
import { MdHistory} from "react-icons/md"
import {SiShortcut, SiYoutubegaming, SiYoutubemusic} from "react-icons/si"
import { GlobalContext } from '../../Services/GlobalContext'
import { BiLike } from 'react-icons/bi'
import { GoTrophy } from 'react-icons/go'
import { BsFlag } from 'react-icons/bs'
import { FiTrendingUp} from 'react-icons/fi'
import { PiMusicNoteLight} from 'react-icons/pi'
import { ImNewspaper} from 'react-icons/im'
import { TbBrandYoutubeKids } from 'react-icons/tb'
import { FiHelpCircle} from 'react-icons/fi'


const Container = styled.div`
    width: 200px;
    position: fixed;
    top: 150px;
    left:0;
    right: 0;
    bottom: 0;
    background-color: black;
    overflow-y: scroll;
  `
  const H1 = styled.h4`
  padding-left: 20px;
  `

  const SmallContainer = styled.div`
  width: 100px;
    position: fixed;
    top: 150px;
    left:0;
    right: 0;
    bottom: 0;
    background-color: black;
  `



const SideBar :React.FC= () => {
  const {toggle} = useContext(GlobalContext)
  return (
    <>
    {toggle?(
      <SmallContainer></SmallContainer>
    ):(
<Container>
  <NavReuse icon={<AiFillHome/>} text='Home' linkTo='/'/>
  <NavReuse icon={<SiShortcut/>} text='Short' linkTo='/Shorts'/>
  <NavReuse icon={<MdSubscriptions/>} text='Subcriptions' linkTo='/Sub'/>
  <hr/>
  <NavReuse icon={<MdOutlineVideoLibrary/>} text='Library' linkTo='/Library'/>
  <NavReuse icon={< MdHistory/>} text='History' linkTo='/History'/>
  <NavReuse icon={< MdOutlineWatchLater/>} text='Watch Later' linkTo='/watch'/>
  <NavReuse icon={< BiLike/>} text='Liked videos' linkTo='/likedVideos'/>
  <hr/>
  <H1>Explore</H1>
  <NavReuse icon={< FiTrendingUp/>} text='Trending' linkTo='/trneding'/>
  <NavReuse icon={< PiMusicNoteLight/>} text='Music' linkTo='/music'/>
  <NavReuse icon={< SiYoutubegaming/>} text='Gaming' linkTo='/game'/>
  <NavReuse icon={< ImNewspaper/>} text='News' linkTo='/news'/>
  <NavReuse icon={< GoTrophy/>} text='Sports' linkTo=''/>
  <hr/>
  <H1>More From YouTube</H1>
  <NavReuse icon={< AiFillYoutube/>} text='YouTube Premium' linkTo='/youtube'/>
  <NavReuse icon={< SiYoutubemusic/>} text='YouTube Music' linkTo='/youtube'/>
  <NavReuse icon={< TbBrandYoutubeKids/>} text='YouTube Kids' linkTo='/youtube'/>
  <hr/>
  <NavReuse icon={< AiOutlineSetting/>} text='Setting' linkTo='/setting'/>
  <NavReuse icon={< BsFlag/>} text='Report history' linkTo=''/>
  <NavReuse icon={< FiHelpCircle/>} text='Help' linkTo=''/>
  <NavReuse icon={<MdOutlineFeedback/>} text='Send' linkTo=''/>
  <hr/>
  <p>About press copyright
  <br/>
  Contact us create or Advertise
  <br/>
  Developers
  <br/>
  <br/>
  <br/>
  Terms privacy policy & safety
  <br/>
  How YouTube works
  <br/>
  Test New Features
  </p>
</Container>
    )}

</>
  )
}

export default SideBar