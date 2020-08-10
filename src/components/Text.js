import React, { useContext, useState } from 'react'
import { AppContext } from '../store/reducer'
import { ChildCom } from './ChildCom'
export default () => {
    const [ aaa, useAaa ] = useState(1);
    let {state, dispatch} = useContext(AppContext)
    const childProps = {useAaa, dispatch, str1:{useAaa:'修改父组件的变量', dispatch:'点击修改年龄'}}
    let codeStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let getCodew = (num) => {
        let str = "";
        for(let i = 0; i<num; i++){
            let ran = codeStr.charAt(Math.floor(Math.random()*(62 - 0) + 0));
            str += ran;
        }
        return str;
    }
    return (
        <>
        <h3>name:{state.name}  age:{state.age}  aaa:{aaa}</h3>
        <button onClick={()=>{
            dispatch({
                type:"setname",
                name: getCodew(4)
            })
        }}>点击换名字</button>
        <ChildCom {...childProps}></ChildCom>
        </>
    )
}
