import React from 'react';
import '../CSS/page.css'
import img from '../Images/book.jpg'
function List({ books }) {
  return (
    <table className='table table-hover table-bordered table-striped form '>
      <tbody>
        {books.map(book => (
          <tr key={book.id}>
            <td className='col-md-8'>
            <span>Title:</span>{book.title}
            <br/>
            <span>Author:</span>{book.author}
            <br/>
            <span>Subject:</span>{book.subject}
            <br/>
            <span>publishDate:</span>{book.publishDate}
            </td>
            <td className='col-md-4'>
                <img className='img-fluid imag' src={img} alt='book_img'></img>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;
