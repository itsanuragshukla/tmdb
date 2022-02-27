import styled from 'styled-components';

const Wrapper = styled.div`
height:calc(100vh - 50px);
height:auto;
width:100vw;
display:flex;
flex-direction:row;
flex-wrap:no-wrap;
justify-content:center;
align-items:flex-start;
padding:20px;
background:rgba(0,0,0,0.5);
`
const MovieInfo = styled.div`
min-width:300px;
background:;
height:;
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:center
align-items:center;
background-color:rgba(0,0,0,0.5);
padding:10px;
&>h1{
font-size:1.5rem;
font-weight:300;
margin-bottom:15px;
}
&>p{
font-size:1rem;
line-height:130%;
}

&>div{
width:100%;
display:flex;
min-height:50px;
align-items:center;
border-bottom:1px solid #999;
font-size:1rem;
padding-right:5px;
&>div{
width:50vw;
overflow:hidden;
word-wrap:break-word;
font-weight:350;
text-transform:capitalize;
&>div{
margin:5px 0 0 0 ;
}
}

}

`
const Poster = styled.div`
min-width:200px;
max-width:min(40vw,400px);
height:auto;
background:url(${props => props.imgUrl});
background-position:center:;
background-size:cover;
border:1px solid #eee;
border-radius:2px;
margin:auto;
box-shadow: 1px 2px 3px 4px rgba(150, 150, 150,0.2),-1px -2px 3px 4px rgba(150,150,150,0.1);

& > img {
width:100%;
height:auto;
opacity:0;
}

`
const PersonGrid = styled.div`
height:auto;
width:100vw;
display:flex;
align-items:flex-start;
justify-content:space-around;
flex-wrap:wrap;
@media only screen and (min-width: 600px) {
justify-content:;
margin-bottom:50px;
}
`;

const Person = styled.div`
height:auto;
max-width:250px;
min-width:100px;
margin:20px 0 0 20px;
min-height:100px;
border-radius:10px;
overflow:hidden;

@media only screen and (min-width: 600px) {
margin:20px 0 0 20px;
}
@media only screen and (max-width: 600px) {
width:100px;
}
@media only screen and (max-width: 992px) {
width:150px;
}

@media only screen and (min-width: 992px) {
width:150px;
}
@media only screen and (min-width: 1200px) {
width:200px;
}
`
const PersonImg = styled.div`
height:auto;
width:100%;
background:linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6) ),url(${props => props.imgUrl});
background-size:100% 100%;
transition:0.2s;
position:relative;
overflow:hidden;
&>span{
position:absolute;
width:100%;
z-index:2;
bottom:0;
transition:0.2s;
&>h1{
font-size:1rem;
width:100%;
margin:0 auto 4px auto;
}
&>*{
text-align:center;

}
}
& > img {
width:100%;
height:auto;
visibility:hidden;
}
&:hover :nth-child(1) {
opacity:0;
}
`;

export {
    Wrapper,
    Poster,
    MovieInfo,
    PersonGrid,
    Person,
    PersonImg
}