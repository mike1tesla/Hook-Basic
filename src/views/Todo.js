const Todo = (props) => {

    // const todos = props.todos;
    const { todos, title, handleDeleteTodo } = props;
    const handleDelete = (id) => {
        handleDeleteTodo(id);
    }

    return (
        <div className="todos-container">
            <div className="title">{title}</div>
            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <li className="todo-child" >
                            {todo.title}
                            &nbsp; &nbsp; 
                            <span onClick={() => handleDelete(todo.id)} > X </span>
                        </li>
                    </div>
                )
            })}
            <hr />
        </div>

    )
}

export default Todo;
