import React from 'react'
import {Link} from 'react-router-dom'
import cl from './style.module.scss'
import {TodoModel} from "../../../shared/api"
import {Card} from "../../../shared/ui"
import {cn} from "../../../shared/lib"

interface Props {
    checkbox: React.ReactNode
    button: React.ReactNode
    data: TodoModel
    linkHref: string
}

const TodoRow = ({checkbox, data, linkHref, button}: Props) => {

    return (
        <Card className={cn(data.done ? cl.completed : '')}>
            <div className={cn('d-f', 'aic')}>
                {checkbox}
                <div className={cn(cl.title)}>
                    <Link to={linkHref}>{data.title}</Link>
                </div>
            </div>
            {button}
        </Card>
    );
};

export default TodoRow