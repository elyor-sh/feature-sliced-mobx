import React from 'react';
import {observer} from "mobx-react-lite";
import {useInstance} from "../../../shared/ioc";
import {CreateTodo} from "../model";
import { Modal} from "../../../shared/ui";
import ModalContent from "./modal-content";

const CreateTodoModal = observer(() => {

    const createTodo = useInstance(CreateTodo)

    return (
        <Modal
            isOpen={createTodo.isOpen}
            close={() => createTodo.setIsOpen(false)}
        >
            <ModalContent />
        </Modal>
    );
});

export default CreateTodoModal;