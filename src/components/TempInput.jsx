export default function TempInput ({temp,scale,onTempChange}){
    
    const scaleNames = {
        c:'섭씨',
        f:'화씨'
    }

    const handleChange = (event) => {
        onTempChange(event.target.value)
    }
    
    return(
        <fieldset>
            {/* c인지 f인지 아직 모를때는 이렇게 [props.scale] */}
            <legend>온도를 입력하세용. (단위 : {scaleNames[scale]}) </legend>
            <input value={temp} onChange={handleChange} />
        </fieldset>
    )

}