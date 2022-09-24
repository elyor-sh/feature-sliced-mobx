import React from 'react'
import cl from './style.module.scss'
import {Logout} from '../../../features/logout'

const Header = () => {
    return (
        <div className={cl.bg}>
            <div className={cl.box}>
                <div className={cl.title}>Todo App</div>
            </div>
            <div className={cl.logout}>
                <Logout />
            </div>
        </div>
    );
};

export default Header