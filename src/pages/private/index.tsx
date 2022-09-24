import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import {observer} from "mobx-react-lite"
import {useInstance} from "../../shared/ioc"
import {CurrentUser} from "../../entities/user/model"

const PrivateRoutes = observer(() => {

    const currentUserModel = useInstance(CurrentUser)

    return (
        currentUserModel.currentUser ? <Outlet /> : <Navigate to='/login' />
    )
});

export {PrivateRoutes}