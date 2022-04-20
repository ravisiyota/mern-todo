"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById('contents');
var todos = [{
    "todoId": 1,
    "todoTitle": "Learn React"

}, {
    "todoId": 2,
    "todoTitle": "Learn Express"
}];

var TodoFilter = function (_React$Component) {
    _inherits(TodoFilter, _React$Component);

    function TodoFilter() {
        _classCallCheck(this, TodoFilter);

        return _possibleConstructorReturn(this, (TodoFilter.__proto__ || Object.getPrototypeOf(TodoFilter)).apply(this, arguments));
    }

    _createClass(TodoFilter, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                "This is placeholder for Todo Filter."
            );
        }
    }]);

    return TodoFilter;
}(React.Component);

var TodoRow = function (_React$Component2) {
    _inherits(TodoRow, _React$Component2);

    function TodoRow() {
        _classCallCheck(this, TodoRow);

        return _possibleConstructorReturn(this, (TodoRow.__proto__ || Object.getPrototypeOf(TodoRow)).apply(this, arguments));
    }

    _createClass(TodoRow, [{
        key: "render",
        value: function render() {
            var borderedStyle = { border: "1px solid silver", padding: 4 };
            var todo = this.props.todo;
            return React.createElement(
                "tr",
                null,
                React.createElement(
                    "td",
                    { style: borderedStyle },
                    todo.todoId
                ),
                React.createElement(
                    "td",
                    { style: borderedStyle },
                    todo.todoTitle
                )
            );
        }
    }]);

    return TodoRow;
}(React.Component);

var TodoTable = function (_React$Component3) {
    _inherits(TodoTable, _React$Component3);

    function TodoTable() {
        _classCallCheck(this, TodoTable);

        return _possibleConstructorReturn(this, (TodoTable.__proto__ || Object.getPrototypeOf(TodoTable)).apply(this, arguments));
    }

    _createClass(TodoTable, [{
        key: "render",
        value: function render() {
            var borderedStyle = { border: "1px solid silver", padding: 6 };
            var todoRows = this.props.todos.map(function (todo) {
                return React.createElement(TodoRow, { key: todo.todoId, todo: todo });
            });
            return React.createElement(
                "table",
                { style: { borderCollapse: "collapse" } },
                React.createElement(
                    "thead",
                    null,
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "th",
                            { style: borderedStyle },
                            "Id"
                        ),
                        React.createElement(
                            "th",
                            { style: borderedStyle },
                            "Title"
                        )
                    )
                ),
                React.createElement(
                    "tbody",
                    null,
                    todoRows
                )
            );
        }
    }]);

    return TodoTable;
}(React.Component);

var TodoAdd = function (_React$Component4) {
    _inherits(TodoAdd, _React$Component4);

    function TodoAdd() {
        _classCallCheck(this, TodoAdd);

        return _possibleConstructorReturn(this, (TodoAdd.__proto__ || Object.getPrototypeOf(TodoAdd)).apply(this, arguments));
    }

    _createClass(TodoAdd, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                "This is placeholder for Todo Add."
            );
        }
    }]);

    return TodoAdd;
}(React.Component);

var TodoList = function (_React$Component5) {
    _inherits(TodoList, _React$Component5);

    function TodoList() {
        _classCallCheck(this, TodoList);

        return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
    }

    _createClass(TodoList, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Todo List"
                ),
                React.createElement(TodoFilter, null),
                React.createElement("hr", null),
                React.createElement(TodoTable, { todos: todos }),
                React.createElement("hr", null),
                React.createElement(TodoAdd, null)
            );
        }
    }]);

    return TodoList;
}(React.Component);

ReactDOM.render(React.createElement(TodoList, null), contentNode);