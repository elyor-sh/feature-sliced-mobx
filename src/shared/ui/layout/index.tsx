import React from "react"
import cl from './style.module.scss'
import {cn} from "../../lib";

interface LayoutProps {
    header: React.ReactNode
    footer: React.ReactNode
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({header, footer, children}) => {

    return (
        <>
            <header>
                {header}
            </header>
            <main className={cn(cl.main)}>
                <div className='container'>
                    {children}
                </div>
            </main>
            <footer>
                {footer}
            </footer>
        </>
    )
}

export default Layout