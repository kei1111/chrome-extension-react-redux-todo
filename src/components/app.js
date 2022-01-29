import React from 'react';
import VisibleTodoList from '../containers/visibleTodoList';
import AddTodo from '../containers/addTodo';

const App = () => {
    return (
        <div className="App">
            <AddTodo />
            <VisibleTodoList />
        </div>
    );
};

export default App;