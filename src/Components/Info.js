import React from 'react'
import Navbar from './Navbar'
import '../CSS/books.css'
import img from '../Images/book.jpg'
import { useLocation } from 'react-router-dom'
const Info = () => {
    const location=useLocation();
    const {data}=location.state
  return (
    <div className='info'>
        {console.log(data)}
        <Navbar/>
        <br/>
        <br/>
        <div class="book-info-container">
        <div class="book-info">
            <h1 class="book-title">{data.title}</h1>
            <div class="book-author">{data.author}</div>
            <div class="book-description">
            <img className='img-fluid imag' src={img} alt='book_img'></img>
            </div>
            <br/>
            <div class="book-details">
            <div class="book-details-row">
                <div class="book-details-label">ISBN:</div>
                <div class="book-details-value">1234567890</div>
            </div>
            <div class="book-details-row">
                <div class="book-details-label">Publisher:</div>
                <div class="book-details-value">Publisher_Name</div>
            </div>
            <div class="book-details-row">
                <div class="book-details-label">Year:</div>
                <div class="book-details-value">{data.publishDate}</div>
            </div>
            <div class="book-details-row">
                <div class="book-details-label">Pages:</div>
                <div class="book-details-value">200</div>
            </div>
            </div>
            <div class="">
                <div class="book-details-des">Description</div>
                <br/>
                <div class="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
                dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas 
                ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim
                est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque 
                vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. 
                Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque 
                sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
                cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non 
                diam sodales hendrerit.</div>

            </div>
        </div>
        </div>

    </div>
  )
}

export default Info