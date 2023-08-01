import React from 'react';
import '../App.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer, 
  MDBRow, 
  MDBCol 
} from 'mdb-react-ui-kit';
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../features/cardSlice';

export default function App() {
  const items = useSelector((state)=>state.allCart.items);
  const dispatch = useDispatch();
  return (
    <div className='m mt-5 mb-5 ' >
      <MDBContainer>
      <MDBRow className='mb-5'>       
    {items.map((item)=>(
       <MDBCol key={item.id} size='4'>
      <MDBCard>
      <MDBCardImage src={item.image} style={{height: '60%',width:'90%'}} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{item.title}</MDBCardTitle>
        <MDBCardText>
          ₹{item.price}
        </MDBCardText>
        <MDBBtn onClick={()=>dispatch(addToCart(item))}>Add To Cart</MDBBtn>
      </MDBCardBody>
    </MDBCard>
       </MDBCol>
    ))}
 
      </MDBRow>
    </MDBContainer>
    </div>
  );
}