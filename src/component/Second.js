import React from 'react'
import meeting from '../component/meeting.jpg'

const Second = () => {
  return (
    <div>
      <div style={{ backgroundColor: 'white', height: 200, color: 'black' }}>
        <div class="container" style={{ padding: 10, paddingTop: 100 }}>
          <div class="row" style={{ padding: 10 }}>
            <div class="col-sm">
              <img src={meeting} alt='meeting' style={{ height: '100%', width: '100%', objectFit: 'contain', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }} />
            </div>
            <div class="col-sm" style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', textAlign: 'left', justifyContent: 'center' }}>
              <p style={{ fontSize: 18, color: '#4B59F7' }}>Marketing Agency</p>
              <p style={{ fontSize: 48, fontWeight: 'bold' }}>Lead Generation Specialist for Online Businesses</p>
              <p style={{ fontSize: 18 }}>We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals</p>
              <button className='btn btn-primary' >Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Second
