import React from 'react'
import styled from '@emotion/styled' 
import {NavLink} from "react-router-dom"

const Hold = styled.div`
margin-top: 20px;
margin-left: 40px;
display: flex;
gap: 10px;
`
const IconHold = styled.div`
display: flex;
font-size: 20px;
gap: 10px;
`
const Span = styled.div`
font-size: small;
font-weight: 500px;
padding-top: 7px;
`

const Icon = styled.div`
margin-top: 3px;
`

interface Iprops{
    text:string,
    icon:any,
    linkTo:string
}

const NavReuse:React.FC<Iprops> = ({text,icon,linkTo}) => {
  return (
    
    <Hold>
        <NavLink to={linkTo} style={{color:"white", textDecoration:"none"}}>
        <IconHold>
        <Icon>{icon}</Icon>
        <Span>{text}</Span>
        </IconHold>
        </NavLink>

    </Hold>

  )
}

export default NavReuse