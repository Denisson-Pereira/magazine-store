import { Route, Routes } from "react-router-dom"
import { Conta, ErrorPage, Home } from "../pages"

export const IsUser = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conta" element={<Conta />} />

            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}