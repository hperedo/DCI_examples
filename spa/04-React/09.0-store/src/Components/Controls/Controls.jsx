import './Controls.css'
import Form from 'react-bootstrap/Form';
import {useContext} from 'react';
import {DataCenter} from '../../DataProvider'

const Controls = ()=>{
    const {dark, setDark, bColor, setBColor} = useContext(DataCenter)
    return(
        <div className="Controls">
            <Form.Check type="checkbox" label="Dark Mode" onChange={()=>setDark(!dark)} checked={dark} /> <br />
            <Form.Label>B Background</Form.Label>
            <Form.Control value={bColor} type="color" onChange={(e)=>setBColor(e.target.value)}></Form.Control>

        </div>
    )
}

export default Controls