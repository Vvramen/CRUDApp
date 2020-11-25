import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.scss';


const TodoItem = ({todo, id, markAsChecked, onRemove}) => {
    console.log('LOOG', markAsChecked, );
    return (
        <React.Fragment>
            <li className="todo"
                key={id}
            >
                <input type="checkbox" onChange={markAsChecked}
                        checked={todo.completed}/>

                <label className = "checkbox" onClick={markAsChecked} />
                <div className="taskText" style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                    {todo.text}
                    <div className="deleteTask" onClick={onRemove}>
                        <img src="https://img.icons8.com/android/12/000000/trash.png" width="20px" height="20px"/>
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
