import React from 'react'
import Navbar from './Navbar'
import '../CSS/page.css'
import img from '../Images/lib6.jpg'
const Contact = () => {
  return (
    <div>
        <Navbar/>
        <div className='container my_contact table-row'>
            <br/>
            <div className='col-md-6 pull-left'>
                    <h1 className='heading-colored'>CONTACT US</h1>
                    <span>If you wish to know more about us, please feel free to contact us:</span>
                    <div className='mem_con box'>
                    <br/>
                    <h4 className='b_h'>In India</h4>
                    <br/>
                        <p><i className='fa-solid fa-location-dot icon'></i>Kongu Engineering college,Perundurai,Erode-638060.</p>
                        <p><i className='fa fa-phone icon '></i>info@mikaelsons.org</p>
                        <p><i className='fa fa-envelope icon'></i>022-23674933</p>
                    </div>
                </div>
                <div className='col-md-6 pull-right'>
                <img className='img-fluid rounded float-right c_img ' src={img} alt='book_img'></img>

                </div>
            

        </div>
    </div>
  )
}

export default Contact