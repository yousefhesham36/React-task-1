import { useState } from "react";
import classes from './styles.module.css'

const GreetFun = (props) => {

    const [count, setCount] = useState(0)

    console.log(count);

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleRemove = () => {
        setCount(count - 1)
    }

    return <>
        <div className={classes['parent']}>
            <h1 className={classes['greet-container']}>
                {count}
            </h1>
            {
                <h1>{count >= 5 ? <span>Count is more than 5</span> : <span>Count is less than 5</span>}</h1>
            }
            <button onClick={handleAdd} > + </button>
            <button onClick={handleRemove} > - </button>
        </div>
    </>
}


export default GreetFun