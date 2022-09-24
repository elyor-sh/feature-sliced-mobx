import React from 'react';
import {Button} from "../../../shared/ui";
import {useInstance} from "../../../shared/ioc";
import {CreateTodo} from "../model";

const CreateTodoButton = () => {

    const createTodo = useInstance(CreateTodo)

    return (
        <div className="d-f jcfe mb-2">
            <Button
                variant="circle"
                onClick={() => createTodo.setIsOpen(true)}
            >
                +
            </Button>
        </div>
    );
};

export default CreateTodoButton;