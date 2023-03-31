import React from 'react'
import meeting from '../component/meeting.jpg'

const Product = () => {
  return (
    <div>
      <div class="container-fluid" style={{ padding: 10, paddingTop: 100, paddingBottom: 10, backgroundColor: 'white' }}>
        <div class="row">
          <div class="col-sm" style={{ padding: '10%' }}>
            <img src={meeting} alt='meeting' style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          </div>
          <div class="col-sm" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', justifyContent: 'center', backgroundColor: 'white', color: 'black' }}>
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

export default Product
