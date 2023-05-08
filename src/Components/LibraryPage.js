import React, { useState ,useEffect} from "react";
// import books from "./books.json";
import Navbar from "./Navbar";
import BookList from "./BookList";
import List from './List'
import Samp from "./Samp";
import '../CSS/page.css'
import axios from "axios";
function LibraryPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [fil,setFil]= useState(false)
  const [filterTitle, setFilterTitle] = useState("");
  const [filterAuthor, setFilterAuthor] = useState("");
  const [filterSubject, setFilterSubject] = useState("");
  const [filterPublishDate, setFilterPublishDate] = useState("");
  const [books, setDataList] = useState([]);
  useEffect(() => {
    axios
      .get("https://ill-earmuffs-fox.cyclic.app//api/create/get")
      .then((response) => setDataList(response.data))
      .catch((error) => console.log(error));
  }, []);
  const filteredBooks = books.filter((book) => {
    const titleMatch = book.title
      .toLowerCase()
      .includes(filterTitle.toLowerCase());
    const authorMatch = book.author
      .toLowerCase()
      .includes(filterAuthor.toLowerCase());
    const subjectMatch = book.subject
      .toLowerCase()
      .includes(filterSubject.toLowerCase());
    const publishDateMatch = book.publishDate
      .toLowerCase()
      .includes(filterPublishDate.toLowerCase());
    return titleMatch && authorMatch && subjectMatch && publishDateMatch;
  });
  const pagesize=10;
  const totalPages = Math.ceil(filteredBooks.length /pagesize);
  const startIndex = (currentPage) * pagesize;
  const booksToDisplay = filteredBooks.slice(startIndex,startIndex + pagesize
  );
  const handlefil =()=>{
    setFil(!fil);
    console.log("hi");
  }
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "title":
        setFilterTitle(value);
        setCurrentPage(0);
        break;
      case "author":
        setFilterAuthor(value);
        setCurrentPage(0);
        break;
      case "subject":
        setFilterSubject(value);
        setCurrentPage(0);
        break;
      case "publishDate":
        setFilterPublishDate(value);
        setCurrentPage(0);
        break;
      default:
        break;
    }
  };

  return (
    <div className="home"> 
    <Navbar/>
    <br/><br/>
    <button onClick={handlefil}><i className="fa fa-filter"></i></button>
    <br/>
     {fil=== true?
      <div className="filter">
          <input
          className="inp" 
         type="text"
         placeholder="Enter Title"
         name="title"
         value={filterTitle}
         onChange={handleFilterChange} 
         />
         <br/>
         <input 
          className="inp" 
         type="text"
         placeholder="Enter Author"
         name="author"
         value={filterAuthor}
         onChange={handleFilterChange}
         />
         <br/>
         <input 
          className="inp" 
         type="text"
         placeholder="Enter Subject"
         name="subject"
         value={filterSubject}
         onChange={handleFilterChange}
         />
         <br/>
         <input
          className="inp" 
          type="text"
          placeholder="Enter Publish Date"
          name="publishDate"
          value={filterPublishDate}
          onChange={handleFilterChange}/>
      </div>:<p></p>
      }
      <div className="container">
        <br/>
        <BookList books={booksToDisplay}/>
        <div>
        <div>
        {currentPage > 0 && <button onClick={() => setCurrentPage(currentPage - 1)}><i className="fa fa-chevron-left"></i></button>}
        {currentPage < totalPages - 1 && <button onClick={() => setCurrentPage(currentPage + 1)}><i className="fa fa-chevron-right"></i></button>}
        </div>
        <br/>
        <h4 className="spa">Total books: {filteredBooks.length}</h4>
        <br/>
      </div>
      </div>
    </div>
  );
}

export default LibraryPage;