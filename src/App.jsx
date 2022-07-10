import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Route, Routes } from "react-router-dom"
import CartScreen from "./components/Cart/CartScreen"
import HomeScreen from "./components/Home/HomeScreen"
import LoginScreen from "./components/Login/LoginScreen"
import ProductScreen from "./components/Products/ProductScreen"
import ProtectedRoutes from "./components/ProtectedRoutes"
import PurchasesScreen from "./components/Purchases/PurchasesScreen"
import Footer from "./components/Shared/Footer"
import Header from "./components/Shared/Header"
import { getAllproducts } from "./store/slices/products.slice"
import './App.css'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllproducts())
  }, [])


  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/login' element={<LoginScreen />} />

          <Route element={<ProtectedRoutes />} >
            <Route path='/cart' element={<CartScreen />} />
            <Route path='/purchases' element={<PurchasesScreen />} />
          </Route>
          <Route path="/product/:id" element={<ProductScreen />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App