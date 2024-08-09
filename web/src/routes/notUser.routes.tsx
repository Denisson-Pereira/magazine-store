import { Route, Routes } from "react-router-dom"
import { ErrorPage, Home, Login } from "../pages"
import ProductDetails from "../pages/ProductDetails"

export const NotUser = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ProdutosDetalhes/:id" element={<ProductDetails />} />

            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}
