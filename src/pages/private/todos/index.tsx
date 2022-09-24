import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {useInstance} from "../../../shared/ioc";
import {Todos} from "../../../entities/todo/model";
import {TodoCard} from "../../../features/todo";
import {CreateTodoButton, CreateTodoModal} from "../../../features/create-todo";
import {CurrentUser} from "../../../entities/user/model";

const TodosPage = observer(() => {

    const todoModel = useInstance(Todos)
    const currentUser = useInstance(CurrentUser)

    useEffect(() => {
        (async () => {
            await todoModel.getAll(currentUser.currentUser?.id!)
        })()
    }, [todoModel, currentUser.currentUser?.id])

    return (
        <div>
           <CreateTodoButton />
            {
                todoModel.todos.map(todo => {
                    return (
                        <TodoCard
                            key={todo.id}
                            data={todo}
                            handleCompleted={todoModel.update}
                            handleDelete={() => todoModel.delete(todo.id, currentUser.currentUser?.id!)}
                        />
                    )
                })
            }
            <CreateTodoModal />
        </div>
    );
});

export {TodosPage}