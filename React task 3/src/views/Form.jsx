import { useEffect, useState, useRef, useLayoutEffect, useMemo, useDebugValue, useCallback } from "react"
import CustomHook from "./CustomHook";





function Calc({ count }) {
    console.log("Calculations......:", count);
    return count * 2
}




const AddUser = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [expanded, setExpanded] = useState(false)
    const [count, setCount] = useState(0)
    const [otherState, setOtherState] = useState(0)
    const divRef = useRef()

    const [value, setValue] = CustomHook()



    useEffect(() => {
        setTimeout(() => {
            setExpanded(true)
        }, 1000)
    }, [])


    // useEffect(() => {
    //     // console.log("HELOO");
    //     // divRef.current.getBoundingClientRect().height = 100
    //     console.log("ueEffect ", divRef.current.getBoundingClientRect().height);
    // },)

    // useLayoutEffect(() => {
    //     // console.log("HELOO");
    //     // divRef.current.getBoundingClientRect().height = 100
    //     console.log("useEffect Layout : ", divRef.current.getBoundingClientRect().height);
    // }, [])

    const doubleCount = useMemo(() => {
        return Calc({ count })
    }, [count])

    const doubleCountWithoutUseMemo = Calc({ count })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email);
        // console.log(e);
        // const name = e.target.name.value
        // const email = e.target.email.value
        // console.log(name, email)
    }



    const Increment = useCallback(() => {
        setCount(count + 1)
    }, [])

    console.log(Increment);

    return (

        <div>
            <h1>Count : {doubleCount}</h1>
            <button onClick={() => { setCount(count + 1) }}>Increment</button>
            <button onClick={() => { setOtherState(!otherState) }}>Toggle The other State</button>


            <h1>value : {value}</h1>
            <button onClick={() => { setValue(value + 1) }}>Increment</button>

            {/* <h1>doubleCountWithoutUseMemo : {doubleCountWithoutUseMemo}</h1> */}
            {/* <button onClick={() => { setCount(count + 1) }}>Increment</button> */}
            {/* <button onClick={() => { setOtherState(!otherState) }}>Toggle The other State</button> */}
        </div>


        // <div>
        //     <div ref={divRef} style={{
        //         backgroundColor: "red", padding: "10px",
        //         transition: "height 0.2s ease-in-out",
        //         height: expanded ? "100px" : "10px"
        //     }} >hello</div>
        //     <form onSubmit={handleSubmit}>


        //         {/* //uncontrolled input */}
        //         name : <input type="text" name="name" onChange={(e) => { setName(e.target.value) }} value={name} />
        //         email : <input type="text" name="email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
        //         <input type="submit" value={"addUser"} />

        //         {/* //uncontrolled input
        //         name : <input type="text" name="name" />ß
        //         email : <input type="text" name="email" />
        //         <input type="submit" value={"addUser"} /> */}
        //     </form>
        // </div>
    )
}

export default AddUser


