import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Navigate, useNavigate, useParams } from "react-router-dom";
import { detailsBaguetest } from "../actions/baguetestActions";
import LoadingBox from "../componnent/LoadingBox";
import MessageBox from "../componnent/MessageBox";
import Rating from "../componnent/Rating";
import Zoom from 'react-img-zoom'


export default function BaguetestScreen(props)
{ 
    const params=useParams();
    const Navigate =useNavigate();
  const {id:baguetestId}=params;
  const [qty, setQty] = useState(1);
  const dispatch=useDispatch();
    const baguetestDetails = useSelector(state => state.baguetestDetails);
    const { loading, error, baguetest } = baguetestDetails;
    useEffect(()=>{
        dispatch(detailsBaguetest(baguetestId));
      },[dispatch,baguetestId]);
      const addToCartHandle = () => {
        Navigate (`/cart/${baguetestId}?qty=${qty}`);
        };
      
    return(
        <div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>
           
            <div className="row top">
              <div className="col-2">
              <Zoom
             img={baguetest.image}
               zoomScale={2}
              width={500}
               height={500}
                    />
              
                    
                
              </div>
              <div className="col-1">
              
                <ul>
                  <li>
                    <h1 className="prodtitle">{baguetest.name}</h1>
                  </li><br/>
                  <li>
                  <h2>
                    Description:
                    </h2>
                    <p className="discrip">{baguetest.description}</p>
                  </li><br/>
                  <li className="discrip">Pirce :<p className="price"> {baguetest.price}</p></li><br/>
                  
                  

                  <li>
                  <h2>Avis : </h2><br/>
                    <Rating
                      rating={baguetest.rating}
                      numReviews={baguetest.numReviews}
                    ></Rating>
                  </li>
                  
                 
                </ul>
              </div>
              <div className="col-1">
                <div className="card card-body">
                  <ul>
                    <li>
                      <div className="row">
                        <div className="discrip">Prix :  </div>
                        <div ><p className="price"> {baguetest.price}</p></div>
                      </div>
                    </li><br/>
                    <li>
                      <div className="row">
                        <div><p>Status: </p></div>
                        <div>
                          {baguetest.countInStock > 0 ? (
                            <span className="success"><p className="success">  In Stock</p></span>
                          ) : (
                            <span className="danger"><p className="success">  Unavailable</p></span>
                          )}
                        </div>
                      </div>
                    </li><br/>
                  
                    
                    {baguetest.countInStock > 0 && (
                      
                      <>
                      <li>
                        <div className="row">
                          <div>
                            <select value={qty} onChange={e=>setQty(e.target.value)}>
                              {
                                [...Array(baguetest.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )
                              }
                            </select>
                          </div>
                        </div>
                      </li><br/>
                     
                      </>

                     )}
                     <li> <button
                         onClick={addToCartHandle}
                          className="primary block"
                        >Add to Cart</button>
                  </li>
                   
                    </ul>
                    </div>
                    </div>
                </div>
            </div>
           

            
             )}
             </div>
        
    );
}
