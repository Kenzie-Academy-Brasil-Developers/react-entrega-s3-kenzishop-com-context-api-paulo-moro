import logo from './logo.svg';
import './App.css';
import Routes from './routes/Routes';
import { ShowCaseProvider } from './providers/showCase';
import { CartProvider } from './providers/cart';

function App() {
  return (
    <div className="App">
      <ShowCaseProvider>
        <CartProvider>
          <Routes/>
        </CartProvider>
      </ShowCaseProvider>
    </div>
  );
}

export default App;
