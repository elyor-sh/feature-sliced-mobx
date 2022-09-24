import React from 'react';
import cl from './style.module.scss'
import {TodoModel} from "../../../shared/api";
import {TodoRow} from "../../../entities/todo";
import {DeleteButton, Input} from "../../../shared/ui";
import {cn} from "../../../shared/lib";

interface Props {
    data: TodoModel
    handleCompleted: (data: TodoModel) => void
    handleDelete: () => void
}

const TodoCard = ({data, handleCompleted, handleDelete}: Props) => {

    return (
        <>
          <TodoRow
              checkbox={
                <Input
                    type='checkbox'
                    checked={data.done}
                    onChange={(e) => handleCompleted({...data, done: e.target.checked})}
                    blockClassName={cn(cl.input)}
                />
              }
              data={data}
              linkHref={`/todos/${data.id}`}
              button={<DeleteButton onClick={handleDelete}/>}
          />
        </>
    );
};

export default TodoCard;