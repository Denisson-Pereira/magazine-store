import { BrowserRouter } from 'react-router-dom'
import { IsUser } from './isUser.routes'
import { NotUser } from './notUser.routes'
import { useGlobalMagazineContext } from '../context/MagazineContext'

export const RoutesApp = () => {

    const { usuario } = useGlobalMagazineContext()

    return (
        <BrowserRouter>
            {usuario.id ? <IsUser /> : <NotUser />}
        </BrowserRouter>
    )
}