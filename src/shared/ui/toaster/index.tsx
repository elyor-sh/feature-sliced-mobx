import React from 'react';
import 'react-toastify/dist/ReactToastify.min.css'
import {ToastContainer} from "react-toastify";

const Toaster = () => {
    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme={'colored'}
            pauseOnHover
        />
    );
};

export default Toaster