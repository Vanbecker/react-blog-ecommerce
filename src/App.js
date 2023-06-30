
import './App.css';
import Header from './Header';
import LatestProducts from './LatestProducts'
import CartSidebar from './CartSidebar'
import Footer from './Footer';

const productsFromApi = [
  {
    name: "Chaise",
    price: 100,
    description: "Une chaise",
    publishedAt: "2021-09-01T10:00:00.000Z",
    category: "meuble",
  },
  {
    name: "Table",
    price: 200,
    description: "Une table",
    publishedAt: "2021-09-01T10:00:00.000Z",
    category: "meuble",
  },
  {
    name: "Canapé",
    price: 300,
    description: "Un canapé",
    publishedAt: "2021-09-01T10:00:00.000Z",
    category: "meuble",
  },
  {
    name: "Télé",
    price: 400,
    description: "Une télé",
    publishedAt: "2021-09-01T10:00:00.000Z",
    category: "électroménager",
  },
  {
    name: "Frigo",
    price: 500,
    description: "Un frigo",
    publishedAt: "2021-09-01T10:00:00.000Z",
    category: "électroménager",
  },
  {
    name: "Four",
    price: 600,
    description: "Un four",
    publishedAt: "2021-09-01T10:00:00.000Z",
    category: "électroménager",
  },
];
const cartFromApi = {
  items: [
    {
      product: "Chaise",
      amount: 200,
      quantity: 2,
    },
  ],
  totalAmount: 400,
  createdAt: "2021-09-01T10:00:00.000Z",
  user: "John Doe",
};



function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <LatestProducts products={productsFromApi} />
      </main>
      <CartSidebar cart={cartFromApi} />
      <Footer />
    </div>
  );
}

export default App;

