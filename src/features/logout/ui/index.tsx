import React from 'react';
import {observer} from "mobx-react-lite";
import LogoutIcon from "./logout-icon";
import {Button} from "../../../shared/ui";
import {useInstance} from "../../../shared/ioc";
import {CurrentUser} from "../../../entities/user/model";
import {useNavigate} from "react-router-dom";

const Logout = observer(() => {

    const navigate = useNavigate()

    const currentUser = useInstance(CurrentUser)

    return (
        <Button
            variant="icon"
            onClick={() => currentUser.logout(navigate)}
        >
            <LogoutIcon />
        </Button>
    );
});

export default Logout;