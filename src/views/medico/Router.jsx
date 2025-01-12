import {lazy} from "react";

export const routesMedico = [
    {
        path: "dashboard",
        name: "Inicio",
        meta: {
            title: "Panel administrador",
            icon: "dashboard",
            requiresAuth: true,
            show: true,
            canAccess: ["VER_DASHBOARD"],
        },
        Component: lazy(async () => await import("@/modules/admin/home/pages/DashboardAdmin.tsx")),
    },
    {
        path: "perfil",
        name: "Perfil",
        meta: {
            title: "Perfil de medico",
            icon: "dashboard",
            requiresAuth: true,
            show: false,
            canAccess: ["VER_DASHBOARD"],
        },
        Component: lazy(async () => await import("../medico/perfil/perfil")),
    },
    {
        path: "proximas-citas",
        name: "ProximasCitas",
        meta: {
            title: "Proximas citas de medico",
            icon: "dashboard",
            requiresAuth: true,
            show: false,
            canAccess: ["VER_DASHBOARD"],
        },
        Component: lazy(async () => await import("../medico/citas/proximasCitas")),
    },
    {
        path: "citas-atendidas",
        name: "CitasAtendidas",
        meta: {
            title: "Citas Atendidas de medico",
            icon: "dashboard",
            requiresAuth: true,
            show: false,
            canAccess: ["VER_DASHBOARD"],
        },
        Component: lazy(async () => await import("../medico/citas/citasAtendidas")),
    },
    {
        path: "calificacion",
        name: "Calificaciones",
        meta: {
            title: "Calificaciones de medico",
            icon: "dashboard",
            requiresAuth: true,
            show: false,
            canAccess: ["VER_DASHBOARD"],
        },
        Component: lazy(async () => await import("../medico/calificacion/calificacion")),
    },
    {
        path: "*",
        name: "No encontrado",
        meta: {
            title: "No encontrado",
            icon: "error",
            requiresAuth: true,
            show: false,
            canAccess: ["VER_DASHBOARD"],
        },
    }
];
