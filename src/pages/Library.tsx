import React from 'react'
import styled from '@emotion/styled'
import LibraryCard from '../Components/Commons/LibraryCard'
import {AiFillCheckCircle} from "react-icons/ai"
// import Cards from '../Components/Commons/Cards'

const H3 = styled.h3`
padding-top: 100px;
`

const Library:React.FC = () => {
  return (
    <div>
        <H3>LIBRARY</H3>
        <LibraryCard
        avatar=''
        title='THE SILENCE OF THE LAMBS (1991) | Official Trailer | MGM '
        text='MGM'
        icon={<AiFillCheckCircle/>}
        views='256K views .'
        time='4 months ago'
        />
    </div>
  )
}

export default Library