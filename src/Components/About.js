import React from 'react'
import Navbar from './Navbar'
import '../CSS/page.css'
const About = () => {
  return (
    <div>
        <Navbar/>
        <div className='container table-row about'>
            <br/>
            <div><h1 className='heading-colored'>ABOUT US</h1></div>
            <div className='my_abt'>
                <div className='abt_c'>
                At Mikaelsons Library we want to get back the Joy of Reading!
                We all have struggled to get that 'one' book to complete our work. Be it a project, 
                office assignment, or reading just for pleasure. It is a challenge to get books at reasonable cost. 
                Readers usually have the option to either buy the books, or rent it through a library and return within a 
                short stipulated time.</div>
                <div className='abt_c'>Mikaelsons Library offers books free of cost against refundable deposit for 6 months to 1 year. Free lending 
                ensures access to everyone, even a reader who is not earning; borrowing for longer duration enables reading at 
                one's convenience and leisure. With a busy and hectic lifestyles for most of us, we hope these features bring back 
                the joy of reading for everyone!</div>
                <div className='abt_c'>
                Our members have access to 20000 books - academic books on science, commerce, arts, entrance examination preparations, 
                fiction, non fiction and many more. Extra copies of academic books which are high in demand are kept for larger benefit 
                of students. Get to know the details of our books and our inventory now!
                </div>
                <div className='abt_c'>
                Our quick & efficient Library Management System (LMS) ensures surfing of books online to save time. 
                As a member, you can look up the book you want, reserve it, come to the library and collect it without wasting time.
                </div>
                <div className='abt_c'>
                    We also prove access to online publications and journals at the library.
                </div>
                <div className='abt_c'>
                Ratna Nidhi Library provides these features coupled with with modern interiors, air conditioning and an efficient LMS. 
                Membership can be availed by individuals, corporates, organisations, NGOs. You can gift membership to that friend who is a bookworm too!
                </div>
            </div>

        </div>
    </div>
  )
}

export default About