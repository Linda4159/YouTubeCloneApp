import React from 'react'
import styled from "@emotion/styled"
import HistoryCard from '../Components/Commons/HistoryCard'

const H3 = styled.h3`
padding-top: 100px;
`




const History:React.FC = () => {
  return (
    <div>
        <H3>HISTORY</H3>
        <HistoryCard
        avatar=''
        title='Bride Price Negotiation'
        views='Nasboi . 66k views'
        text='Papa bosco helping his nephew pay bride price'
        />

        
    </div>
  )
}

export default History