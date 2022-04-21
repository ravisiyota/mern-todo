const contentNode = document.getElementById('contents');
// const todos = [
//     {
//         "todoId": 1,
//         "todoTitle": "Learn React"

//     },
//     {
//         "todoId": 2,
//         "todoTitle": "Learn Express"
//     }
// ];

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
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.todoAdd;
        this.props.createTodo({
            todoTitle: form.title.value
        });
        form.title.value = "";
    }

    render() {
        return (
            <div>
                <form name="todoAdd" onSubmit={this.handleSubmit}>
                    <input type="text" name="title" id="title" />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = { todos: [] };
        this.createTodo = this.createTodo.bind(this);
    }

    componentDidMount() {
        this.loadTodos();
    }

    loadTodos() {
        setTimeout(() => {
            this.setState({ todos: todos }, 500);
        });
    }

    createTodo(newTodo) {
        const newTodos = this.state.todos.slice();
        newTodo.todoId = this.state.todos.length + 1;
        newTodos.push(newTodo);
        this.setState({ todos: newTodos });
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <TodoFilter />
                <hr />
                <TodoTable todos={this.state.todos} />
                <hr />
                <TodoAdd createTodo={this.createTodo} />
            </div>
        );
    }
}

ReactDOM.render(<TodoList />, contentNode);