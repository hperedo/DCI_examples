import './B.css'
import {useContext} from 'react'
import {DataCenter} from '../../DataProvider'
import {Button} from 'react-bootstrap'


export const B = (props)=>{
    const {setColor, bColor} = useContext(DataCenter)
    return(
        <div className="B" style={{background: bColor}}>
            <h2>B</h2>
            <p>{props.text}</p>
            <Button onClick={()=>setColor("red")} >Change Color For A Component</Button>
        </div>
    )
}

export default B;