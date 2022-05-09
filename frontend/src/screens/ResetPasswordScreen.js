import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updatePassword } from '../actions/userActions';
import LoadingBox from '../componnent/LoadingBox';
import MessageBox from '../componnent/MessageBox';
import { USER_UPDATE_RESET } from '../constants/userconstants';

export default function ResetPasswordScreen(props) {
    // const navigate = useNavigate();

    // const [password, setPassword] = useState('');
    // const [id, setId] = useState('')
    // const userDetails = useSelector((state) => state.userDetails);
    // const { loading, error, user } = userDetails;

    // const updatePassword = useSelector((state) => state.updatePassword);
    // const {
    //     loading: loadingUpdate,
    //     error: errorUpdate,
    //     success: successUpdate,
    // } = updatePassword;

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     if (successUpdate) {
    //         dispatch({ type: USER_UPDATE_RESET });
    //         navigate('/userlist');
    //     }
    //     else {
    //         setPassword(user.password);
    //     }
    // }, [dispatch, navigate, successUpdate, user]);

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     // dispatch update user
    //     dispatch(updatePassword({ id: id, password: password }));
    // };
    return (
        <div>
        <form className="form" >
          {/* <div> */}
            <h1>Edit User</h1>
            {/* {loadingUpdate && <LoadingBox></LoadingBox>}
            {errorUpdate && (
              <MessageBox variant="danger">{errorUpdate}</MessageBox>
            )}
          </div>
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : ( */}
            <>
              
              <div>
                <label htmlFor="password">Pasqword</label>
                <input
                  id="password"
                  type="password"
                //   placeholder="Enter password"
                //   value={password}
                //   onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
             
              <div>
                <button type="submit" className="primary">
                  Update
                </button>
              </div>
            </>
          {/* )} */}
        </form>
      </div>
    );
}