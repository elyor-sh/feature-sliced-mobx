import React from 'react';
import {observer} from "mobx-react-lite";
import cl from './style.module.scss'
import {useInstance} from "../../../shared/ioc";
import {LoadingSpinnerModel} from "../index";

const spinnerElements = new Array(12).fill(0)

const LoadingSpinner = observer(() => {

    const loadingModel = useInstance(LoadingSpinnerModel)

    if(!loadingModel.loading){
        return <></>
    }

    return (
        <div className={cl.spinner}>
            <div className={cl.ldsSpinner}>
                {
                    spinnerElements.map((_, i) => (
                         <div key={i.toString()}/>
                    ))
                }
            </div>
        </div>
    );
});

export default LoadingSpinner;