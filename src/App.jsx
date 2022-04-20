const contentNode = document.getElementById('contents');
const todos = [
    {
        "todoId": 1,
        "todoTitle": "Learn React"

    },
    {
        "todoId": 2,
        "todoTitle": "Learn Express"
    }
];

class TodoFilter extends React.Component {
    render() {
        return (
            <div>This is placeholder for Todo Filter.</div>
        );
    }
}

class TodoRow extends React.Component {
    render() {
        const borderedStyle = { border: "1px solid silver", padding: 4 };
        const todo = this.props.todo;
        return (
            <tr>
                <td style={borderedStyle}>{todo.todoId}</td>
                <td style={borderedStyle}>{todo.todoTitle}</td>
            </tr>
        );
    }
}

class TodoTable extends React.Component {
    render() {
        const borderedStyle = { border: "1px solid silver", padding: 6 };
        const todoRows = this.props.todos.map(todo => <TodoRow key={todo.todoId} todo={todo} />)
        return (
            <table style={{ borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={borderedStyle}>Id</th>
                        <th style={borderedStyle}>Title</th>
                    </tr>
                </thead>
                <tbody>{todoRows}</tbody>

            </table>

        );
    }
}

class TodoAdd extends React.Component {
    render() {
        return (
            <div>This is placeholder for Todo Add.</div>
        );
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <TodoFilter />
                <hr />
                <TodoTable todos={todos} />
                <hr />
                <TodoAdd />
            </div>
        );
    }
}

ReactDOM.render(<TodoList />, contentNode);