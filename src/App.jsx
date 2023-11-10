import Header from "./components/Header";
import Maeals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Maeals />
    </CartContextProvider>
  );
}

export default App;
