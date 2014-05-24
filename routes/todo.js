/**
 * Created by Administrator on 2014-03-31.
 */

var todos = [
    { description: 'Pick up milk', status: 'incomplete', id: 1 },
    { description: 'Test2', status: 'incomplete', id: 2 },
    { description: 'Test3', status: 'incomplete', id: 3 },
    { description: 'Test4', status: 'incomplete', id: 4 },
    { description: 'Test5', status: 'incomplete', id: 5 }
];

var getMaxid = function() {
    var todosCount = todos.length, max = 0;

    while(todosCount--) {
        if (max < todos[todosCount].id) {
            max = todos[todosCount].id;
        }
    }

    return ++max;
};

var search = function(id) {
    var todo = {}, todosCount = 0, l = todos.length;


    for(;todosCount < l; todosCount++)
    //while(todosCount--) {
        if (todos[todosCount].id == id) {
            todo = todos[todosCount];
            break;
        }
    //}

    return {
        index : todosCount == l ? -1 : todosCount,
        todo : todo
    };
};

exports.insert = function(req, res) {
    var todo = req.body;
    console.log(todo);
    todo.id = getMaxid();
    todos.push(todo);
    console.log(todos);
    res.send(todo);
};

exports.update = function(req, res) {
    var todo = req.body, oldTodo = search(req.param("id"));

    todos[oldTodo.index] = todo;
    console.log(todos);
    res.send("updateOK");
};

exports.delete = function(req, res) {

    var todo = search(req.param("id")), todoIndex = todo.index;

    if (!(todo.index === -1)) {
        todos.splice(todoIndex, 1);
    }

    console.log(todos);

    res.send("delete OK");
};

exports.getOne = function(req, res){

    var todo = search(req.param("id"));
    res.send(todo.todo || {});
};

exports.getAll = function(req, res){
    res.send(todos);
};

exports.index = function(req, res) {
    res.render("todo");
};

exports.getTestOne = function(req, res) {
    res.send(todos[0]);
};
/**
 * Created by Administrator on 2014-04-25.
 */
