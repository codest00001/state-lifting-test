export default function Child1({onInputChange}){

    const handleChange = (event) => {
        onInputChange(event.target.value);
    }

    return (
        <div>
            <input type="text" placeholder="내용을 입력하시옹" onChange={handleChange}/>
        </div>
    )

}