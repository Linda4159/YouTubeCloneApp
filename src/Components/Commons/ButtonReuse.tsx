import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div``
const Button = styled.button`
font-size: smaller;
font-weight: lighter;
/* padding: 5px; */
`

interface  iButt {
    title:string
}

const ButtonReuse:React.FC<iButt> = ({title}) => {
  return (
    <Container>
<Button>{title}</Button>
    </Container>
  )
}

export default ButtonReuse