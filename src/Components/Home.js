import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import img from '../Images/lib5.jpg'
import '../CSS/page.css'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='my_home container table-row'>
            <div className='col-md-6 '>
            <img className='img-fluid rounded float-left h_img ' src={img} alt='book_img'></img>
            </div>
            <div className='col-md-6 home_art'>
                <article>
                    <h2 className='heading-colored'>MIKAELSONS LIBRARY</h2>
                </article>
                <p>
                Are you a student struggling to get the right books for you assignment? A home maker looking for Harry Potter Series for your 
                child without putting a hole in your pocket? A retired professional trying to develop a hobby of reading? A professional looking 
                to further your career by learning more? The HR at your office hoping to encourage reading amongst your employees?
                </p>
                <p>If yes, you are at just the right place!</p>
                <p>Mikalesons Library, provides access to over 20000 books for all age groups! We allow a long borrowing 
                    time- 6 months to an year with 100% refundable deposit! Our wide range of books will interest children, students, NGOs, 
                    Corporates, professionals, retired personnel and many more.</p>
                <p>From Paulo Coelho's Alchemist to Steven Covey's Seven Habits, from Peter Drucker To Romila Thapar, from Amitav Ghosh 
                    to J.K. Rowling; you will definately find the book of your interest! You can surf the books through our specially 
                    designed Library Management System accessible over internet if you are a member!</p>    
                <p>Membership is open for Schools, Colleges, NGOs, Organisations, Corporates and individuals too.</p>
                <div><Link className='member' to="/member">Get MemberShip</Link></div>
            </div>
        </div>
    </div>
  )
}

export default Home