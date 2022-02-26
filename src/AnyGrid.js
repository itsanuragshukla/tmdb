import React from 'react';
import {
    PersonGrid,
} from './MovieContainer'


const AnyGrid = (props) => {
    return <>
    <h1 className="gridHead">{props.heading} </h1>
    <PersonGrid> {props.children}</PersonGrid> < />
}
export default AnyGrid