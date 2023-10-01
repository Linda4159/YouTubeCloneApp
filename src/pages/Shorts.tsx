import React from 'react'
// import Cards from '../Components/Commons/Cards'
import styled from "@emotion/styled"
import ShortCards from '../Components/Commons/ShortCards'
import {AiFillLike, AiFillDislike} from "react-icons/ai"
import {BiSolidCommentDetail} from "react-icons/bi"
import {FaShare} from "react-icons/fa"
import {GoKebabHorizontal} from "react-icons/go"



const H2 = styled.div`
    padding-top: 150px;
    `

const Shorts:React.FC = () => {
  return (
    <div>
        <H2>SHORT FILMS</H2>
        <ShortCards
        icon={<AiFillLike/>}
        like='4.3m'
        icon1={< AiFillDislike/>}
        dislike='Dislike'
        icon2={<BiSolidCommentDetail/>}
        comment='9.3k'
        icon3={<FaShare/>}
        icon4={<GoKebabHorizontal/>}
        avatar=''
        />
    </div>
  )
}

export default Shorts