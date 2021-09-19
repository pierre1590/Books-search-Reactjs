import React from 'react';
import Book from './Book';
import SearchBook from '../components/SearchBook';

function HomeSearch(){
   
return (
    <div className="container">
        <div className="header">
            <h1 className="title">Book Finder</h1>
            <SearchBook  />
        </div>
        <Book

        />
    </div>
)

}

export default HomeSearch;