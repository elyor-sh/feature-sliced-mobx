import React, {InputHTMLAttributes} from 'react'
import cl from './style.module.scss'
import {cn} from "../../lib"

interface Props extends InputHTMLAttributes<any>{
    valid?: boolean
    errorText?: string
    blockClassName?: string
}

const Input = ({valid = true, errorText = '', blockClassName = '',  ...rest}: Props) => {
    return (
        <div className={cn(cl.block, blockClassName)}>
            <input
                {...rest}
                className={cn(cl.input, !valid ? cl.error : '', rest.className || '')}
            />
            {
                !valid && <span className={cn(cl.errorText)}>{errorText}</span>
            }
        </div>
    );
};

export default Input