import PropTypes from 'prop-types'
import classes from './styles.module.css'

const TodoItem = ({ todo, index, deleteTodo, toggleTodo }) => {
    return (
        <tr className={classes.row}>
            <td className={classes.cell} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </td>
            <td className={classes.cell}>
                <button onClick={() => toggleTodo(index)}>Done</button>
            </td>
            <td className={classes.cell}>
                <button onClick={() => deleteTodo(index)}>Delete</button>
            </td>
        </tr>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        text: PropTypes.string,
        completed: PropTypes.bool
    }).isRequired,
    index: PropTypes.number.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoItem
