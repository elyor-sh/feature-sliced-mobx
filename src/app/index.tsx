import {BrowserRouter} from "react-router-dom";
import './global.scss';
import {Routing} from "../pages";

export const App = () => {
    return (
        <BrowserRouter>
            <Routing />
        </BrowserRouter>
    )
}