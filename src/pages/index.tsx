import {Routes, Route, Outlet,Navigate} from 'react-router-dom'
import {Header} from "../widgets/header";
import {Footer} from "../widgets/footer";
import {PrivateRoutes} from "./private";
import {TodosPage} from "./private/todos";
import {LoginPage} from "./public/login";
import {PublicRoutes} from './public'
import {RegistrationPage} from "./public/register";
import {routeMap} from "../shared/config";
import {Layout, Toaster} from "../shared/ui";
import {LoadingSpinner} from "../widgets/loading-spinner";

export const Routing = () => {

    return (
        <>
            <LoadingSpinner />
            <Toaster/>
            <Routes>
                <Route element={<PublicRoutes />}>
                    <Route path={routeMap.LOGIN} element={<LoginPage />} />
                    <Route path={routeMap.REGISTRATION} element={<RegistrationPage />} />
                </Route>
                <Route element={<PrivateRoutes />}>
                    <Route element={
                        <Layout
                            header={<Header/>}
                            footer={<Footer/>}
                        >
                            <Outlet/>
                        </Layout>
                    }>
                        <Route path='' element={<Navigate to={routeMap.TODOS} />} />
                        <Route path={routeMap.TODOS} element={<TodosPage />} />
                    </Route>
                </Route>
            </Routes>
        </>
    )
}

