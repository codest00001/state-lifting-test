import { useState } from "react"
import TempInput from "./TempInput";

//  화씨를 섭씨로 바꾸는 함수
function toCtemp(temp){
    return ((temp-32)*5) / 9;
}

// 섭씨를 화씨로 바꾸는 함수
function toFtemp(temp){
    return (temp*9) / 5 + 32;
}

function tryConvert(temp, convert){
    const input = parseFloat(temp);
    //인풋이 낫어넘버면 트루
    if(Number.isNaN(input)){
        return '';
    }
    const output= convert(input);
    //소수점 세째자리나오게 하고 싶으므로, 천을 곱한 후 라운드하고 천으로 나눔
    const rounded = Math.round(output * 1000)/1000;
    return rounded.toString();
}

export default function Calculator(){

    const [temp, setTemp] = useState('0');
    const [scale, setScale] = useState('c');

    const handleCChange = (temp) => {
        setTemp(temp);
        setScale('c');
    } 

    const handleFChange = (temp) => {
        setTemp(temp);
        setScale('f');
    } 


    const ctemp = scale =='f' ? tryConvert(temp, toCtemp) : temp;
    const ftemp = scale =='c' ? tryConvert(temp, toFtemp) : temp;

    return (
        <div>
            <TempInput scale='c' temp={ctemp} onTempChange={handleCChange}></TempInput>
            <TempInput scale='f' temp={ftemp} onTempChange={handleFChange}></TempInput>

        </div>
    )
}