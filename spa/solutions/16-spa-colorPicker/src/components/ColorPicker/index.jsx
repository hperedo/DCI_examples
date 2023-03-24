import './style.css'
const ColorPicker = props=>{
    return (
        <>
            <h2>Color Picker</h2>
            <div className="preview"></div>
            <div>
                <span>Red</span><input type="range" min="0" max={255} step={1} onChange={(e)=>console.log(e.target.value)} /><br />
                <span>Green</span><input type="range" min={0} max={255} step={1} name="" value="0" /><br />
                <span>Blue</span><input type="range" min={0} max={255} step={1} name="" value="0" /><br />
            </div>
        </>
    )
}

export default ColorPicker