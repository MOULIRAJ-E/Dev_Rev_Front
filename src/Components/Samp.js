import React from 'react';
import '../CSS/page.css'
import { Link } from 'react-router-dom';
import img from '../Images/book.jpg'
function Samp({ books }) {
  return (
   <div className='my_card row justify-content-center table-row'>
     {books.map(book=>(
        <div class="card border-success mx-1 mb-3 col-md-3 my_c ">
        <div class="card-body">
          <h1 class="card-title"><Link to={`/book/${book._id}`}  state={{data:book}}  className='external'>{book.title}</Link></h1>
          <h5 class="card-text">Authour:{book.author}</h5>
          <h6 class="card-text">Subject:{book.subject}</h6>
          <h6 class="card-text">Publish On:{book.publishDate}</h6>
        </div>
      </div>
        ))}
   </div>
  );
}

export default Samp;
