import React from 'react';
import '../CSS/page.css'
import { Link } from 'react-router-dom';

function BookList({ books }) {
  return (
    <table className='table table-hover table-row table-striped form '>
      <thead className='tab_head'>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Subject</th>
          <th scope="col">Publish Date</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <tr key={book._id} >
            <td><Link to={`/book/${book._id}`}  state={{data:book}}  className='external'>{book.title}</Link></td>
            <td>{book.author}</td>
            <td>{book.subject}</td>
            <td>{book.publishDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookList;
