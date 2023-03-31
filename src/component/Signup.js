import React from 'react'
import Lottie from "lottie-react";
import market from '../component/market.json'

const Signup = () => {
  return (
    <div>
      <div class="container" style={{ padding: 10, paddingTop: 100, paddingBottom: 10 }}>
          <div class="row">
            <div class="col-sm">
              <Lottie animationData={market} style={{ height: '90%' }} />
            </div>
            <div class="col-sm" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', justifyContent: 'center'}}>
              <p style={{ fontSize: 18 }}>Marketing Agency</p>
              <p style={{ fontSize: 48, fontWeight: 'bold' }}>Lead Generation Specialist for Online Businesses</p>
              <p style={{ fontSize: 18 }}>We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals</p>
              <button className='btn btn-primary' >Get Started</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Signup
