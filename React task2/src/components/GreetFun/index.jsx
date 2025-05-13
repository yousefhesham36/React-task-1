import { memo, useEffect, useState } from "react";
import classes from './styles.module.css'


const GreetFun = (props) => {
    // this.state 
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    // console.log(count);
    // console.log("render");

    useEffect(() => {

        console.log('ComponentDidMount');

    }, [])

    useEffect(() => {

        console.log('componentDidUpdate');

        return () => {
            console.log('cleanup');
        }

    }, [count])

    useEffect(() => {

        return () => {
            console.log('componentWillUnmount');
        }

    }, [])

    // useEffect(() => {

    //     console.log('render');

    // },)


    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleRemove = () => {
        setCount(count - 1)
    }

    const handleAdd2 = () => {
        setCount2(count2 + 1)
    }

    const handleRemove2 = () => {
        setCount2(count2 - 1)
    }


    return <>
        <h1 className={classes['greet-container']}>
            {count}
        </h1>




        <button onClick={handleAdd} > + </button>
        <button onClick={handleRemove} > - </button>


        <h1 className={classes['greet-container']}>
            {count2}
        </h1>

        <button onClick={handleAdd2} > + 2</button>
        <button onClick={handleRemove2} > - 2</button>
    </>
}


export default memo(GreetFun)