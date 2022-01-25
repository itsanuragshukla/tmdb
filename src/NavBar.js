import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
min-height:50px;
height:auto;
width:100vw;
background-color: #3F4354;
`
const Logo = styled.div`
min-height:50px;
width:auto;
height:auto;
max-height:100%;
padding:10px;
max-width:100vw;
border:0px solid white;
font-size:1.6rem;
font-weight:300;
display:flex;
justify-content:center;
align-items:center;
color:  #FFFFFF;

@media only screen and (max-width: 600px) {
font-size:1.3rem;
}
`
const Nav = () => {
    return (
        <Wrapper>
    <Logo>Anurag Shukla</Logo>
    </Wrapper>
    )
}

export default Nav