import React from 'react';
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useInstance} from "../../../shared/ioc";
import {AuthForm} from "../../../features/auth-form";
import {routeMap} from "../../../shared/config";
import {CurrentUser} from "../../../entities/user/model";

const LoginPage = observer(() => {

    const navigate = useNavigate()

    const currentUserModel = useInstance(CurrentUser)

    return (
        <>
            <AuthForm
                name={currentUserModel.authParams.name}
                password={currentUserModel.authParams.password}
                handleSubmit={() => currentUserModel.login(navigate)}
                onChange={currentUserModel.setAuthParams}
                buttonText={`Kirish`}
                link={`/${routeMap.REGISTRATION}`}
                linkText={`Registratsiyaga o'tish`}
            />
        </>
    );
});

export {LoginPage}