import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.scss';


const TodoItem = ({todo, id, markAsChecked, onRemove}) => {
    return (
        <React.Fragment>
            <li className="todo"
                key={id}
                style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
                // checked={checked}
                // onCheck={onCheck}
            >
                <input type="checkbox" onClick={markAsChecked}/>
                <div className="taskText">
                    {todo.title}
                    <div className="deleteTask" onClick={onRemove}>
                        <img src='https://img.icons8.com/android/12/000000/trash.png' alt="error"/>
                    </div>
                </div>
            </li>
            <hr/>
        </React.Fragment>
    )
};

TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    markAsChecked: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
}

export default TodoItem
