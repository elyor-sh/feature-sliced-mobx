import React from 'react';
import {Link} from 'react-router-dom'
import cl from './style.module.scss'
import {Button, Input} from "../../../shared/ui";
import {useInstance} from "../../../shared/ioc";
import {cn, Validate} from "../../../shared/lib";

interface Props {
    name: string
    password: string
    handleSubmit: () => void
    onChange: (name: string, value: string) => void
    buttonText: string
    link: string
    linkText: string
}

const AuthForm = ({name, password, handleSubmit, onChange, buttonText, link, linkText}: Props) => {

    const validate = useInstance(Validate)

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.code === 'Enter') {
            handleSubmit()
        }
    }

    return (
        <div className={cn(cl.wrapper)}>
            <div
                className={cn(cl.form)}
                onKeyDown={handleKeyDown}
            >
                <div className='w-100 mb-2 d-f jcc'>
                    <h2>{buttonText}</h2>
                </div>
                <div className='w-100 mb-1'>
                    <Input
                        placeholder='Login'
                        name='name'
                        value={name}
                        onChange={e => onChange('name', e.target.value)}
                        valid={name ? validate.userName(name) : true}
                        errorText={`Login kamida 4 ta simvoldan iborat bo'lishi kerak`}
                    />
                </div>
                <div className='w-100 mb-1'>
                    <Input
                        placeholder='Parol'
                        type='password'
                        name='password'
                        value={password}
                        onChange={e => onChange('password', e.target.value)}
                        valid={password ? validate.password(password) : true}
                        errorText={`Parol kamida 6 ta simvoldan iborat bo'lishi kerak`}
                        autoComplete={'new-password'}
                    />
                </div>
                <div className='w-100 mb-1 d-f jcfe'>
                    <Link to={link}>{linkText}</Link>
                </div>
                <div className='w-100 mb-1'>
                    <Button
                        disabled={!validate.password(password) || !validate.userName(name)}
                        onClick={handleSubmit}
                    >
                        {buttonText}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;