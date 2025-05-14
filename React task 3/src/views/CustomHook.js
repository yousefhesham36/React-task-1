import { useDebugValue, useState } from "react"


function CustomHook() {

    const [value, setValue] = useState(0)


    const x = value > 5 ? "big" : "small"
    useDebugValue(x)

    return [value, setValue]
}

export default CustomHook