import React from 'react'
import {Spinner,Preloader} from './Containers'

class Spinner extends React.Component{
    render(){
        return (<Preloader>
                <Spinner/>
                </Preloader>
            )
    }
}
export default Spinner