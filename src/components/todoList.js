import React from 'react';
import propTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos }) => {
    return (
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} {...todo} />
            ))}
        </ul>
    );

    TodoList.propTypes = {
        todos: propTypes.arrayOF(
            propTypes.shape({
                id: propTypes.number.isRequired,
                text: propTypes.string.isRequired,
            }).isRequired
        ).isRequired,
    };
};

export default TodoList;