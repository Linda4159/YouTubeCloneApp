import React,{useContext} from 'react'
import styled from "@emotion/styled"
import NavBar from '../blocks/Nav'
import SideBar from '../blocks/SideBar'
import { Outlet } from 'react-router-dom'
import { GlobalContext } from '../../Services/GlobalContext'


const LayoutContainer = styled.div<{ml:string}>`
margin-top: 70px;
margin-left: ${(props)=>props.ml}
`

const OutletContainer = styled.div`
padding: 20px;
`

const WebLayouts:React.FC = () => {
  const {toggle} = useContext(GlobalContext)
  return (
    <LayoutContainer ml={toggle ? "100px" : "200px"}>
        <NavBar/>
        <SideBar/>
        <OutletContainer>
        <Outlet/>
        </OutletContainer>
    </LayoutContainer>
  )
}

export default WebLayouts