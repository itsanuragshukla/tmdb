import React from 'react'
import styled from 'styled-components'

const MovieGrid = styled.div`
height:auto;
width:100vw;
display:flex;
align-items:center;
justify-content:space-around;
flex-wrap:wrap;
`;

const MovieDiv = styled.div`
height:auto;
max-width:90vw;
min-width:230px;
margin:30px;
border-radius:20px;
overflow:hidden;
background:rgba(255,255,255,0.5);
transition:0.3s;
@media only screen and (max-width: 600px) {
width:150px;
}
@media only screen and (min-width: 600px) {
width:180px;

}
@media only screen and (min-width: 992px) {
width:190px;

}
@media only screen and (min-width: 1200px) {
width:200px;
}
:hover{
transform:scale(1.1);
}
`;

const PosterImage = styled.div`
height:auto;
width:100%;
background:url(${props => props.imgUrl}) , green;
background-size:100% 100%;
& > img {
width:100%;
height:auto;
visibility:hidden;
}
`;
const Button = styled.div`
min-width:100px;
width:auto;
max-width:50%;
min-height:50px;
height:60px;
border-radius:5px;
background: #03CC90;
font-size:1.2rem;
display:flex;
justify-content:center;
align-items:center;
margin:30px auto;
color:  #3F4354;
`;
const HeroDiv = styled.div`
height:auto;
width:100vw;
display:flex;
position:relative;
overflow:hidden;
background:linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6) ),url(${props => props.heroImgUrl}) , #03CC90;
background-size:100% 100%;

& > img {
width:100vw;
height:auto;
visibility:hidden;
}
&:hover :nth-child(2) {
opacity:0;
}
`;
const HeroInfo = styled.div`
width:100%;
height:auto;
position:absolute;
bottom:0;
background:rgba(255,255,255,0);
backdrop-filter: blur(0px);
transition:0.3s;
overflow:hidden;

& > h1 {
width:90%;
height:auto;
font-size:2rem;
margin-left:0.6rem;
font-weight:100;
@media only screen and (max-width: 600px) {
font-size:1rem;
}
}

& > p {
width:auto;
height:auto;
font-size:1rem;
line-spacing:120%;
padding:0.6rem;
@media only screen and (max-width: 600px) {
font-size:0.8rem;
}
}
`;

const Spinner = styled.div`
height:50px;
width:50px;
border-radius:50%;
border:5px solid transparent;
border-top:5px solid ${props => props.color || '#232734'};
margin:10px;
animation:spin 0.5s linear infinite;
@keyframes spin{
0%{
transform:rotate(0deg);
}
100%{
transform:rotate(360deg);
}
}

`

const Preloader = styled.div`
width:100vw;
height:calc(100vh - 60px);
background:inherit;
display:flex;
justify-content:center;
align-items:center;
`
export {
    MovieDiv,
    MovieGrid,
    PosterImage,
    Button,
    HeroDiv,
    HeroInfo,
    Spinner,
    Preloader
}