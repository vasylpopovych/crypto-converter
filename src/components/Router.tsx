import { Route } from "react-router";
import { Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import NonFoundPage from "../pages/NonFoundPage";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<NonFoundPage />} />
        </Routes>
    );
};

export default Router;
