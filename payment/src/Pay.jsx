import React, { useEffect } from 'react';
import { useState } from 'react';
import StipeCheckout from "react-stripe-checkout"
import axios from 'axios'

const KEY="pk_test_51M6qxpSJvY6PQ1qwzRyRePGYZggwgu55Onrm6Rh8xKeUK6RzJtkMinZb4i5ptD3EiBjgweICCYyxUYlEH87lSzTO00XjI3UBdc"
const Pay = () => {
    const [stripeToken,setStipeToken] =useState(null)
  
    const onToken=(token)=>{
      setStipeToken(token)
    }

    useEffect(() => {
      const setToken=(token)
    const makeRequest = async()=>{
        try {
          const res=await axios.post("http://localhost:5000/api/checkout/payment",{
            tokenId:stripeToken.id,
            amount:2000,
          })
          console.log(stripeToken.id)
          console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    stripeToken && makeRequest()

    }, [stripeToken])
    


  return (
    <div>
        <h1>PAY</h1>
        <StipeCheckout
        name='Naveen Shop'
        billingAddress
        shippingAddress
        description='your total is $20'
        amount={2000}
        token={onToken}
        stripeKey={KEY}
        >
        <button>PayNow</button>
        </StipeCheckout>
    </div>
  )
}

export default Pay