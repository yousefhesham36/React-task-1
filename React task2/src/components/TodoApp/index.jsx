import { useState } from "react"
import TodoInput from "../TodoInput"
import TodoItem from "../TodoItem"
import { v4 as uuid } from 'uuid';
import classes from './styles.module.css'

const TodoApp = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (text) => {
        setTodos([...todos, { text, completed: false }])
    }

    const toggleTodo = (idx) => {
        const newTodos = [...todos]
        newTodos[idx].completed = !newTodos[idx].completed
        setTodos(newTodos)
    }

    const deleteTodo = (idx) => {
        const newTodos = [...todos]
        newTodos.splice(idx, 1)
        setTodos(newTodos)
    }

    return (
        <>
            <div className={classes.parent}>
                <TodoInput addTodo={addTodo} />
                <h1>To Do List</h1>
                <table className={classes.table}>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Done</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo, idx) => (
                            <TodoItem
                                key={uuid()}
                                todo={todo}
                                index={idx}
                                deleteTodo={deleteTodo}
                                toggleTodo={toggleTodo}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}


// const validate = (data , validator)=>{validator(data)}
// SOLID => Single Responsibility Principle


export default TodoApp