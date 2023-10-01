import React from 'react'
// import Cards from '../Components/Commons/Cards'
import styled from '@emotion/styled'
import SubCard from '../Components/Commons/SubCard'

const H2 = styled.h2`
padding-top: 100px;
`

const Subcription :React.FC= () => {
  return (
    <div>
        <H2>Subscribe here</H2>
        {/* <Cards title='Subcription card'/> */}
        <SubCard
        avatar=''
        name='Kome Gold'
        text='771k subscribers'
        />
        
    </div>
  )
}

export default Subcription