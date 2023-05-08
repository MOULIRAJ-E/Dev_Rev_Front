import React from 'react'
import Navbar from './Navbar'
import '../CSS/page.css'
const Membership = () => {
  return (
    <div>
        <Navbar/>
        <br/>
        <div className='container col-md-6 my_mem table-row'>
            <h1 className='heading-colored'>MEMBERSHIP</h1>
                <strong>Exclusive Member Benefits:  </strong>
                <div className='mem_det'>
                <br/>
                    <p>1. You will become member of our library by paying only Rs 250, and then you can borrow as many books as you want
                         free of cost as we do not charge any borrowing charges like other commercial libraries.    </p>
                    <p>2. Access to books for 6 months to a year for lending. </p>
                    <p>3. You can refer to the books online, reserve your book even before visiting the library. </p>
                    <p>4. Reader Advisory Service is given by an experienced librarian in terms of reference of books and use of library software. </p>
                    <p>5. Timings:
                        <ul>
                            <li>Sunday, Monday, Thursday, Friday & Saturday - 11:00 am to 07:00 pm,</li>
                            <li>Wednesday - 11:00 am to 3:00 pm,</li>
                            <li>Tuesday - Closed</li>
                        </ul>
                    </p>
                </div>
            

        </div>
    </div>
  )
}

export default Membership