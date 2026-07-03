import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

import useTodo from "../hooks/useTodo";

export default function Layout() {
    const todo = useTodo();

    return (
        <div className="flex h-screen w-screen overflow-hidden bg-(--bg-main) text-(--text-primary) transition-colors duration-300 md:flex-row flex-col">
            <Sidebar />

            <main className="flex-1 overflow-hidden">
                <Outlet context={todo} />
            </main>
        </div>
    );
}