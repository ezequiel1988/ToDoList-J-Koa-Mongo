const ToDoModel = require('../models/toDoModel');
const HandleError = require('../helpers/handleError')


exports.getUsers = async (ctx, next) => {

    let err, task;

    [err, task] = await HandleError.ErrorReject(ToDoModel.find({}));
    if(err) throw new Error(`Hubo un error al cargar los datos: ${err}`);
    
    ctx.body = task;
    await next();

}

exports.createUser = async (ctx, next) => {

    let err, Task;

    const { task } = ctx.request.body;

    const newTask = new ToDoModel({task});

    [err, Task] = await HandleError.ErrorReject(newTask.save({task}));
    if(err) ctx.throw(404, `hubo un error: ${err}`);
    ctx.body = Task;

    await next();
}

exports.deleteUser = async (ctx, next) => {
    
    let err, res;
    const { task } = ctx.request.body;

    [err, res] = await HandleError.ErrorReject(ToDoModel.deleteOne({task}));
    if(err) ctx.throw(500, `hubo un error: ${err}`);
    ctx.body = res;

    await next();

}