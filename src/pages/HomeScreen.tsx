import React,{useState,useEffect} from 'react'
import styled from '@emotion/styled'
import Cards from '../Components/Commons/Cards'
import {searchYoutubeVideo} from "../utils/ApiCall"


const Container = styled.div`
margin-top: 100px;
`
const Hold = styled. h1`

`

const Holder = styled.div`
display: flex;
flex-wrap: wrap;
gap: 30px;
/* padding: 30px; */
`

const HomeScreen:React.FC = () => {
  const [SearchData,setSearchData] = useState([])
  const FetchSearchData = async ()=>{
    await searchYoutubeVideo().then((res)=>{
      console.log("kome",res.contents)
      setSearchData(res.contents)
    })
  }
  useEffect(()=>{
    FetchSearchData()
  },[])
  return (
    <Container>
      <Hold>Homescreen</Hold>
      <Holder>
      {SearchData?.map((props)=>(
         <Cards props={props} title='HomeScreen Card'/>))}
      </Holder>
    </Container>
  )
}

export default HomeScreen