import {inject, singleton} from "tsyringe";
import {makeAutoObservable} from "mobx";
import {toast} from "react-toastify";
import {Todos} from "../../../entities/todo/model";
import {CurrentUser} from "../../../entities/user/model";
import {TodoCreateModel} from "../../../shared/api";

const initialParams: TodoCreateModel = {
    title: '',
    description: '',
    createdAt: '',
    userId: '',
    done: false
}

@singleton()
class CreateTodo {

    public isOpen: boolean = false

    public createTodoParams: TodoCreateModel = {
       ...initialParams
    }

    constructor(
        @inject(Todos) private readonly todos: Todos,
        @inject(CurrentUser) private readonly currentUser: CurrentUser
    ) {
        makeAutoObservable(this, {}, {autoBind: true})
    }

    public setIsOpen (param: boolean): void {
        this.isOpen = param
    }

    public setCreateTodoParams (name: string, value: string) : void {
        this.createTodoParams = {
            ...this.createTodoParams,
            [name]: value
        }
    }

    public async create (): Promise<void> {

      try {

          this.createTodoParams = {
              ...this.createTodoParams,
              userId: this.currentUser.currentUser?.id || '',
              createdAt: new Date().toString(),
          }

          if(!this.isValid){
              toast.error(`Hamma kerakli data larni to'ldiring!`, {toastId: 'create todo error'})
              return
          }

          await this.todos.create(this.createTodoParams)

          this.refreshCreateParams()

          this.setIsOpen(false)

      }catch (e) {

      }
    }

    public get isValid () : boolean {
        return this.createTodoParams.title.length > 2 && this.createTodoParams.description.length > 3;
    }

    private refreshCreateParams (): void {
        this.createTodoParams = {...initialParams}
    }

}

export default CreateTodo