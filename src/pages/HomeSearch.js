import React, {useState} from 'react';
import axios from 'axios';
import Book from './Book';
import SearchBook from '../components/SearchBook.js';

function HomeSearch(){
return (
    <div className="container">
            <h1 className="title">Book Finder</h1>
            <SearchBook />
    </div>
)

}

export default HomeSearch;