import { CartProvider } from './context/CartContext'
import { FavoritesProvider } from './context/FavoritesContext'
import { MagazineProvider } from './context/MagazineContext'
import { RoutesApp } from './routes/routes'

function App() {

  return (
    <MagazineProvider>
      <CartProvider>
        <FavoritesProvider>
          <RoutesApp />
        </FavoritesProvider>
      </CartProvider>
    </MagazineProvider>
  )
}

export default App
