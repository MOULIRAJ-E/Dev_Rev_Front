import React from 'react'
import Navbar from './Navbar'
import '../CSS/books.css'
import '../CSS/page.css'
import img from '../Images/book.jpg'
import { useLocation } from 'react-router-dom'
const Info2 = () => {
    const location=useLocation();
    const {data}=location.state
  return (
    <div className='info table-row'>
        {console.log(data)}
        <Navbar/>
        <br/>
        <br/>
        <div className='my_card'>
        <div class="card p-2 m-3 mb-3 justify-content-center my_c">
            <div class="card-body">
                <h5 class="card-title">{data.title}</h5>
                <h6 class="card-text">{data.author}</h6>
                <img className='img-fluid card-img imag' src={img} alt='book_img'></img>
                <p class="card-text"><span className='head'>ISBN:</span>123456789</p>
                <p class="card-text"><span className='head'>Publisher:</span>Publisher_Name</p>
                <p class="card-text"><span className='head'>Year:</span>{data.publishDate}</p>
                <p class="card-text"><span className='head'>Pages:</span>200</p>
                <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
                dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas 
                ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim
                est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque 
                vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. 
                Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque 
                sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
                cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non 
                diam sodales hendrerit.
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Info2