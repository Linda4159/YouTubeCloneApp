import React from 'react'
import {Global,css} from "@emotion/react"

const GlobalStyles:React.FC = () => {
  return (
    <Global 
    styles = {css`
            
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&family=Roboto:wght@300;400;500;700;900&display=swap');
 body{

font-family: 'Roboto', sans-serif;
color: #fff;
padding: 0;
margin: 0;
min-height: 100vh;
background-color: #1f1f1f;
 }
    `}
    />
  )
}

export default GlobalStyles