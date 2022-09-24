import React from 'react';
import cl from './style.module.scss'
import {cn} from "../../lib";

interface Props {
    children: React.ReactNode
    className?: string
}

const Card = ({children, className}: Props) => {
    return (
        <div className={cn(cl.card, className || '')}>
            {children}
        </div>
    );
};

export default Card;