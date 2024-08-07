import { CartProvider } from './src/context/CartContext';
import { FavoritesProvider } from './src/context/FavoritesContext';
import { MagazineProvider } from './src/context/MagazineContext';
import Routes from './src/routes/index.routes';

export default function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <MagazineProvider>
          <Routes />
        </MagazineProvider>
      </FavoritesProvider>
    </CartProvider>
  );
}