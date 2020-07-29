import React, {useContext} from 'react'
import MyContent from './MyContent'
export default ()=>{
    let count = useContext(MyContent);
    return (
        <h3>
            {count}
        </h3>
    )
}