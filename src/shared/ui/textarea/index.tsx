import React, {TextareaHTMLAttributes} from 'react'
import cl from './style.module.scss'

interface Props extends TextareaHTMLAttributes<any> {
    valid?: boolean
    errorText?: string
}

const TextArea = ({valid = true, errorText = '', ...rest}: Props) => {
    return (
        <div>
             <textarea
                 {...rest}
                 className={cl.textarea}
             />

            {
                !valid && <span>{errorText}</span>
            }
        </div>
    );
};

export default TextArea