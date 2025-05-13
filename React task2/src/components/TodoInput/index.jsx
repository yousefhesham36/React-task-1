import { useState } from "react"
import classes from './styles.module.css'
const TodoInput = ({ addTodo }) => {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(text)
        setText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div >
                <input type="text" value={text} onChange={(myEvent) => {
                    console.log(myEvent.target.value)
                    setText(myEvent.target.value)
                }} />
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default TodoInput