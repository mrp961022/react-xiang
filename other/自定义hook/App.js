import React,{useState} from 'react';

const useCus = (val, num) => {
    let [count,setCount] = useState(val);
    const add = () => {
        setCount(count+num)
    }
    return {count,add}
}

export default ()=>{
    let {count,add} = useCus(10,2)
    return (
        <>
        <h1>{count}</h1>
        <button onClick={()=>{
            add();
        }} >加2</button>
        </>
    )
}