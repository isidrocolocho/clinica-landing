import {routesMedico} from "../views/medico/router/Router";
import {routesPaciente} from "../views/paciente/router/Router";
import {routesLanding} from "../views/landing/router/Router";
// import Navbar from "../views/partials/Navbar";
// import Footer from "../views/partials/Footer";
// import Home from "../views/landing/home/Home";
// import AboutUs from "../views/landing/AboutUs/AboutUs";
// import Login from "../views/landing/login/login";
// import Servicios from "../views/landing/Servicios/Servicios";
// import Registro from "../views/landing/registro/registro";


import {Fragment, Suspense, lazy} from "react";
import {Outlet, Route} from "react-router-dom";
import LoaderSuspenseComponent from "../components/core/LoaderComponent.jsx";


// const Router = () => {
//     return(
//         <> 
//             <Navbar/>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/somos" element={<AboutUs />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/servicios" element={<Servicios />} />
//                 <Route path="/registro" element={<Registro />} />
//             </Routes>
//             <Footer/> 
//         </>
//     )
// }

const renderRoute = (route, index) => {
    const Component = route.Component || Fragment;
    const Layout = route.Layout || Fragment;
    const Guard = route.guard || Fragment;
    
    return (
        <Route
            key={index}
            path={route.path}
            element={
                <Guard>
                    <Suspense fallback={<LoaderSuspenseComponent />}>
                        <Layout>
                            {route.children ? <Outlet /> : <Component />}
                        </Layout>
                    </Suspense>
                </Guard>
            }
        >
            {route?.children && renderRoutesGlobal(route.children)}
        </Route>
    );
};


export const renderRoutesGlobal = (routes) => {
    return routes.map(renderRoute);
}

export const routes = [
    {
        path: "/",
        Layout: lazy(() => import(/* webpackChunkName: "LazyLayoutPublic" */ '../layouts/client/Layout')),
        children: [
            ...routesLanding,
        ],
    },
    // Rutas protegidas
    {
        path: "/medico",
        guard: lazy(() => import('../guards/AuthGuard.jsx')),
        Layout: lazy(() => import(/* webpackChunkName: "LazyLayoutAdminMedico" */ '../layouts/admin/Layout.jsx')),
        children: [
            ...routesMedico,
        ],
    },
    {
        path: "/paciente",
        guard: lazy(() => import('../guards/AuthGuard.jsx')),
        Layout: lazy(() => import(/* webpackChunkName: "LazyLayoutAdmiPaciente" */ '../layouts/admin/Layout.jsx')),
        children: [
            ...routesPaciente,
        ],
    },
];



