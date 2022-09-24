import React from 'react';
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useInstance} from "../../../shared/ioc";
import {CurrentUser} from "../../../entities/user/model";
import {AuthForm} from "../../../features/auth-form";
import {routeMap} from "../../../shared/config";

const RegistrationPage = observer(() => {

    const navigate = useNavigate()

    const currentUserModel = useInstance(CurrentUser)

    return (
        <>
            <AuthForm
                name={currentUserModel.authParams.name}
                password={currentUserModel.authParams.password}
                handleSubmit={() => currentUserModel.register(navigate)}
                onChange={currentUserModel.setAuthParams}
                buttonText={`Registratsiya`}
                link={`/${routeMap.LOGIN}`}
                linkText={`Loginga o'tish`}
            />
        </>
    );
});

export {RegistrationPage}