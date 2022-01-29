import { connect } from 'react-redux';
import TodoList from '../components/todoList';

const mapStateToPorops = state => {
    return { todos: state.todos };
};

const VisibleTodoList = connect(mapStateToPorops)(TodoList);

export default VisibleTodoList;