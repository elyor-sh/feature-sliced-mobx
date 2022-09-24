import {singleton} from "tsyringe";

import httpInstance from "./base";
import {AxiosType, TodoCreateModel, TodoModel} from "./models";

/**
 *
 * @description Bu yerda hamma todos ga tegishli endpointlar yoziladi
 * @author Elyor Shodiyorov
 *
 * */

@singleton()
class TodoService {

    public getTodos =
        (): AxiosType<TodoModel[]> => httpInstance.get('/todos')

    public createTodo =
        (
            params: TodoCreateModel
        ): AxiosType<TodoModel> => httpInstance.post('/todos', params)

    public deleteTodo =
        (
            id: string
        ): AxiosType<TodoModel> => httpInstance.delete(`/todos/${id}`)

    public updateTodo =
        (
            id: string,
            params: TodoCreateModel
        ): AxiosType<TodoModel> => httpInstance.put(`/todos/${id}`, params)
}


export default TodoService