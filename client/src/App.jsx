import './App.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import Home from './pages/home/Home'
import ProductList from './pages/productList/ProductList'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Account from './pages/account/Account'
import WishList from './pages/wishList/WishList'
import Orders from './pages/orders/Orders'
import Add from './pages/Add';

function App() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  const queryClient = new QueryClient()
  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className='app'>
          <Outlet />
        </div>
      </QueryClientProvider>

    )
  }

  const ProtectRoutes = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectRoutes>
        <Layout />
      </ProtectRoutes>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/products",
          element: <ProductList />
        },
        {
          path: "/product/:id",
          element: <Product />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/account",
          element: <Account />
        },
        {
          path: "/wishlist",
          element: <WishList />
        },
        {
          path: "/orders",
          element: <Orders />
        },
        {
          path: "/add",
          element: <Add />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },

  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
