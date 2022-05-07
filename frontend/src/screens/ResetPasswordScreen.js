import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { resetPassword,updatePassword} from '../actions/userActions';
import LoadingBox from '../componnent/LoadingBox';
import MessageBox from '../componnent/MessageBox';




export default function ResetPasswordScreen(props) {
  const params = useParams();
  const { id: resetPasswordId } = params
  const navigate = useNavigate();
  const [data , setData] = useState('');
  const [password, confirm_password] = useState('');
  const [id, setId] = useState('');
  const forgotPassword = useSelector((state) => state.forgotPassword);
  const { loading, error, passwordupdate } = forgotPassword;

  
  

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPassword(password));
  };
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);


  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Nouveau mot de passe </h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="password">nouveau mot de passe</label>
          <input
            type="password"
            id="password"
            placeholder="Entrer votre mot de passe"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label htmlFor="confirmPassword"> confirmer mot de passe</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Enter confirm password"
            required
            onChange={(e) => confirm_password(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            connexion
          </button>
        </div>
        <div>
          <label />
          <div>
            Mot de passe oublié ?{' '}
            <Link to={`/forgot-password?redirect=${redirect}`}><button className='primary' >Réinialiser </button>

            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}