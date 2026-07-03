import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route
                        path="/"
                        element={<Navigate to="/myday" replace />}
                    />
                    <Route
                        path="/myday"
                        element={<Home tab="myday" />}
                    />
                    <Route
                        path="/tasks"
                        element={<Home tab="tasks" />}
                    />
                    <Route
                        path="/completed"
                        element={<Home tab="completed" />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}