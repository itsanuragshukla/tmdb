import styled from 'styled-components'

const MovieGrid = styled.div`
height:auto;
width:100vw;
display:flex;
align-items:center;
justify-content:center;
flex-wrap:wrap;
`;

const MovieDiv = styled.div`
height:auto;
max-width:90vw;
min-width:250px;
margin:20px 20px;
min-height:270px;
border-radius:2px;
overflow:hidden;
background: linear-gradient(90deg, #222831 8%, #393E46 18%, #222831 33%);
background-size:200% 100%;
animation: 1.25s shine linear infinite;
transition:0.2s;
box-shadow: 1px 2px 3px 4px rgba(34, 40, 49,0.5),-1px -2px 3px 4px rgba(34, 40, 49,0.3);
@media only screen and (max-width: 600px) {
width:150px;
}

@keyframes shine {
100% {
background-position: -200% 0;
}
}
@media only screen and (max-width:300px) {
min-width:150px;
min-height:200px;
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
filter:brightness(120%);
}
`;

const PosterImage = styled.div`
height:auto;
width:100%;
background:url(${props => props.imgUrl});
background-size:100% 100%;
transition:0.2s;
& > img {
width:100%;
height:auto;
visibility:hidden;
}
:hover{
transform:scale(1.05);
}
`;
const Button = styled.div`
min-width:100px;
width:auto;
max-width:200px;
height:60px;
border-radius:5px;
background: #222831;
font-size:1.2rem;
display:flex;
justify-content:center;
align-items:center;
margin:30px auto;
color:  #3F4354;
cursor:pointer;
transition:0.3s;

:hover{
color:#00FFF5;
}

`;
const HeroDiv = styled.div`
max-height:calc(100vh - 50px);
max-width:100vw;
display:flex;
position:relative;
overflow:hidden;;
background:linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6) ),url(${props => props.heroImgUrl});
background-size:cover;


& > img {
width:100%;
height:100%;
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

@media only screen and (min-width:720px) {                                          max-width:80vw;
}
@media only screen and (min-width: 992px) {
max-width:70vw;
}

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
border-top:5px solid ${props => props.color || '#00FFF5'};
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
height:auto;
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