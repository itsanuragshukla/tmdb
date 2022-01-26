import styled from 'styled-components'
import cancelSearch from '../img/cancelSearch.svg'

const Wrapper = styled.div`
width:100vw;
min-height:100px;
display:flex;
justify-content:center;
align-items:center;
background:rgba(0,0,0,0);
`
const Search = styled.div`
width:95%;
min-height:55px;
display:flex;
background: #222831;
border-radius:20px;
`
const Icon = styled.div`
width:55px;
min-height:55px;
display:flex;
justify-content:center;
align-items:center;

& > svg {
height:60%;
width:60%;
fill: #00FFF5;
}

`
const Input = styled.div`
width:calc(100% - 100px);
min-height:55px;
display:flex;
justify-content:center;
align-items:center;
margin:0 auto 0 0;
background: ;

:hover{
& > input::placeholder {
color:#00ADB5;
opacity: 1;
}
}

& > input{
width:100%;
height:100%;
color: #00FFF5;
background: transparent;
border:none;
font-size:1.2rem;
text-align:center;
:focus{
outline:none;
}

::-webkit-search-cancel-button {
-webkit-appearance: none;
height: 30px;
width: 30px;
background-color:#00FFF5;
border-radius:50%;
background-image: url(${cancelSearch});
color:#03CC90;
}

}
}

`

export {
    Wrapper,
    Search,
    Icon,
    Input
}