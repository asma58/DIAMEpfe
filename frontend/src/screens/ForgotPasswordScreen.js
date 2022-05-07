import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { forgotPassword } from '../actions/userActions';
import LoadingBox from '../componnent/LoadingBox';
import MessageBox from '../componnent/MessageBox';

export default function ForgotPasswordScreen(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const userForgotPassword = useSelector((state) => state.userForgotPassword);
  const { userinfo, loading, error } = userForgotPassword;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };
  useEffect(() => {
    if (userinfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userinfo]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Entrer votre email</h1>
        </div>
        {loading && <LoadingBox />}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="email">Adresse Email</label>
          <input
            type="email"
            id="email"
            placeholder="Entrer votre email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
            <button className="primary" type="submit">
            Chercher
          </button>
        </div>
        <div>
          <label />
        </div>
      </form>

    </div>
  )
}