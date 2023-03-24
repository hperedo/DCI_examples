import './A.css'
import { useEffect, useContext } from 'react'
import {DataCenter} from '../../DataProvider'
import Controls from '../Controls/Controls'

export const A = (props)=>{
    // console.log(props)
    // read/get color from provider
    const {color} = useContext(DataCenter)
    // when component is loaded
    useEffect(()=>{
        props.change("This data From Child A")
    })
    
    return(
        <div className="A" style={{background: color}}>
            <h2>{props.title}</h2>
            <Controls></Controls>
        </div>
    )
}

export default A;

