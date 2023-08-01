import React, { useEffect } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from "../features/cardSlice";

export default function App() {
const {cart, totalQuantity} =  useSelector((state)=>{return state.allCart})
const dispatch = useDispatch();
useEffect(() => {
  dispatch(getCartTotal());
}, [cart]);
  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand >Shopping-Cart</MDBNavbarBrand>
        <span>
            <Link to='/'>All Products</Link>
            </span>
            <span>
            <MDBBtn color='light' rippleColor='dark' className="fw-bold text-decoration-none">
            <Link to='/cart'>
        Cart({totalQuantity})
            </Link>
      </MDBBtn>
              </span>
        
        
      </MDBContainer>
    </MDBNavbar>
  );
}