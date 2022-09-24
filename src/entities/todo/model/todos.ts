import {makeAutoObservable, runInAction} from "mobx";
import {inject, singleton} from "tsyringe";
import {TodoCreateModel, TodoModel, TodoService} from "../../../shared/api";
import {LoadingSpinnerModel} from "../../../widgets/loading-spinner";

@singleton()
class Todos {

    public todos: TodoModel[] = []

    constructor(
        @inject(TodoService) private readonly todosService: TodoService,
        @inject(LoadingSpinnerModel) private readonly loadingSpinner: LoadingSpinnerModel,
    ) {
        makeAutoObservable(this, {}, {autoBind: true})
    }

    public async getAll(id: string) {
       try {

           this.loadingSpinner.setLoading(true)

           const response = await this.todosService.getTodos()

           runInAction(() => {
               this.todos = response.data.filter(d => d.userId === id)
           })

       }finally {
          this.loadingSpinner.setLoading(false)
       }
    }

    public async create(todo: TodoCreateModel) {
        try {

            this.loadingSpinner.setLoading(true)
            await this.todosService.createTodo(todo)
            await this.getAll(todo.userId)

        }finally {
            this.loadingSpinner.setLoading(false)
        }
    }

    public async delete(id: string, userId: string) {

        try {
            this.loadingSpinner.setLoading(true)
            await this.todosService.deleteTodo(id)
            await this.getAll(userId)
        }finally {
            this.loadingSpinner.setLoading(false)
        }
    }

    public async update(todo: TodoModel) {

        try {

            this.loadingSpinner.setLoading(true)

            const id = todo.id

            const params: TodoCreateModel = {
                done: todo.done,
                title: todo.title,
                createdAt: todo.createdAt,
                description: todo.description,
                userId: todo.userId
            }

            await this.todosService.updateTodo(id, params)

            runInAction(() => {
                this.todos = this.todos.map(t => {
                    if (t.id === todo.id) return todo

                    return t
                })
            })

        }finally {
            this.loadingSpinner.setLoading(false)
        }

    }

    public refresh() {
        this.todos = []
    }

}

export default Todos