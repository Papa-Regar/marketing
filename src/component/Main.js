import React from 'react'
import Lottie from "lottie-react";
import first from '../component/first.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import meeting from '../component/meeting.jpg'
import market from '../component/market.json'
import Service from './Service';
import Footer from './Footer';

const Main = () => {
  return (
    <div style={{height: '100vh'}}>
      <div style={{ backgroundColor: '#101222', color: 'white' }}>
        
        <div class="container" style={{ padding: 10, paddingTop: 100, paddingBottom: 10 }}>
          <div class="row">
            <div class="col-sm">
              <Lottie animationData={first} style={{ height: '90%' }} />
            </div>
            <div class="col-sm" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', justifyContent: 'center', backgroundColor: '#101222' }}>
              <p style={{ fontSize: 18 }}>Marketing Agency</p>
              <p style={{ fontSize: 48, fontWeight: 'bold' }}>Lead Generation Specialist for Online Businesses</p>
              <p style={{ fontSize: 18 }}>We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals</p>
              <button className='btn btn-primary' >Get Started</button>
            </div>
          </div>
        </div>

        <div class="container-fluid" style={{ padding: 10, paddingTop: 100, paddingBottom: 10, backgroundColor: 'white' }}>
          <div class="row">
            <div class="col-sm" style={{padding: '10%'}}>
              <img src={meeting} alt='meeting' style={{height: '100%', width: '100%', objectFit: 'cover'}} />
            </div>
            <div class="col-sm" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', justifyContent: 'center', backgroundColor: 'white', color:'black' }}>
              <p style={{ fontSize: 18 }}>Marketing Agency</p>
              <p style={{ fontSize: 48, fontWeight: 'bold' }}>Lead Generation Specialist for Online Businesses</p>
              <p style={{ fontSize: 18 }}>We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals</p>
              <button className='btn btn-primary' >Get Started</button>
            </div>
          </div>
        </div>

        <div class="container" style={{ padding: 10, paddingTop: 100, paddingBottom: 10 }}>
          <div class="row">
            <div class="col-sm">
              <Lottie animationData={market} style={{ height: '90%' }} />
            </div>
            <div class="col-sm" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', justifyContent: 'center', backgroundColor: '#101222' }}>
              <p style={{ fontSize: 18 }}>Marketing Agency</p>
              <p style={{ fontSize: 48, fontWeight: 'bold' }}>Lead Generation Specialist for Online Businesses</p>
              <p style={{ fontSize: 18 }}>We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals</p>
              <button className='btn btn-primary' >Get Started</button>
            </div>
          </div>
        </div>

        <div style={{color: 'black'}}>
        <Service />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Main
