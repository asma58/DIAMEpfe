import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminRoute from './componnent/AdminRoute';
import Navbar from './componnent/Navbar';
import PrivateRoute from './componnent/PrivateRoute';
import AboutScreen from './screens/AboutScreen';
import BaguetestScreen from './screens/BaguetestScreen';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProfileScreen from './screens/ProfilScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import BaguetestListScreen from './screens/BaguetestListScreen';
import BaguetestEditScreen from './screens/BaguetestEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import SearchScreen from './screens/SearchScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ResetPasswordScreen from '.screens/ResetPasswordScreen' ;

function App() {
  return (
    <BrowserRouter>
      <div class="grid-container">
        <header >
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/cart" element={<CartScreen />}></Route>
            <Route path="/cart/:id" element={<CartScreen />}></Route>
            <Route path="/" element={<HomeScreen />} exact></Route>
            <Route path="/about" element={<AboutScreen />}></Route>
            <Route path="/baguetest/:id" element={<BaguetestScreen />} exact></Route>
            <Route
              path="/baguetest/:id/edit"
              element={<BaguetestEditScreen />}
              exact
            ></Route>
            <Route path='/signin' element={<SigninScreen />} exact></Route>
            <Route path='/register' element={<RegisterScreen />}></Route>
            <Route path="/shipping" element={<ShippingAddressScreen />}></Route>
            <Route path="/payment" element={<PaymentMethodScreen />}></Route>
            <Route path="/placeorder" element={<PlaceOrderScreen />}></Route>
            <Route path="/order/:id" element={<OrderScreen />}></Route>
            <Route path="/orderhistory" element={<OrderHistoryScreen />}></Route>
            <Route path='/forgot-password' element={<ForgotPasswordScreen />}></Route>
            <Route path='/reset-password/:token' element={<ResetPasswordScreen />}></Route>
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <ProfileScreen />
                </PrivateRoute>
              }
            />
            <Route
              path="/baguetestlist"
              element={
                <AdminRoute>
                  <BaguetestListScreen />
                </AdminRoute>
              }
            />
            <Route
              path="/orderlist"
              element={
                <AdminRoute>
                  <OrderListScreen />
                </AdminRoute>
              }
            />
            <Route
              path="/userlist"
              element={
                <AdminRoute>
                  <UserListScreen />
                </AdminRoute>
              }
            />
            <Route
              path="/user/:id/edit"
              element={
                <AdminRoute>
                  <UserEditScreen />
                </AdminRoute>
              }
            />
            <Route path="/search/name" element={<SearchScreen />} exact></Route>
            <Route
              path="/search/name/:name"
              element={<SearchScreen />}
              exact
            ></Route>
            <Route
              path="/search/categorie/:categorie"
              element={<SearchScreen />}
              exact
            ></Route>
            <Route
              path="/search/categorie/:categorie/name/:name"
              element={<SearchScreen />}
              exact
            ></Route>
            <Route
              path="/search/categorie/:categorie/name/:name/order/:order"
              element={<SearchScreen />}
              exact
            ></Route>

          </Routes>

        </main>

      </div>
    </BrowserRouter>
  );
}
export default App;