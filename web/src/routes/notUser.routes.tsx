import { Route, Routes } from "react-router-dom"
import { ErrorPage, Home, Login } from "../pages"

export const NotUser = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}