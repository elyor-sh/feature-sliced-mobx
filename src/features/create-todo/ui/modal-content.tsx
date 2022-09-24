import React from 'react';
import {observer} from "mobx-react-lite";
import cl from "./style.module.scss";
import {Button, Input, TextArea} from "../../../shared/ui";
import {useInstance} from "../../../shared/ioc";
import {CreateTodo} from "../model";
import {cn} from "../../../shared/lib";

const ModalContent = observer(() => {

    const createTodo = useInstance(CreateTodo)

    return (
        <div className={cl.container}>
            <div className={cn('tac', cl.title)}>Todo qo'shish</div>
            <div className={cn('w-100', 'mb-1')}>
                <Input
                    value={createTodo.createTodoParams.title}
                    onChange={e => createTodo.setCreateTodoParams('title', e.target.value)}
                />
            </div>
            <div className={cn('w-100', 'mb-1')}>
                <TextArea
                    value={createTodo.createTodoParams.description}
                    onChange={e => createTodo.setCreateTodoParams('description', e.target.value)}
                />
            </div>
            <Button
                onClick={createTodo.create}
                disabled={!createTodo.isValid}
            >
                Saqlash
            </Button>
        </div>
    );
});

export default ModalContent;