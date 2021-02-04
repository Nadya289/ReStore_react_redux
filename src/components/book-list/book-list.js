import React, { Component } from 'react';
import BookListItem from '../book-list-item/book-list-item';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import withBookstoreService, {withBookService} from '../hoc/with-bookstore-service';
import Spinner from '../../components/spinner/spinner';
import { booksLoaded} from '../../actions/index';
import {compose}  from '../../utils/cpmpose';
import './book-list.css';

class BookList extends Component{

    componentDidMount(){

        const {bookstoreService, booksLoaded} = this.props;
        bookstoreService.getBooks()
            .then((data) => booksLoaded(data));
    }


    render (){
        const { books, loading } = this.props;
        if(loading){
            return <Spinner/>
        }
        return(
            <ul className='book-list'>
                {
                books.map((book) => {
                    return(
                        <li key = {book.id}>
                            <BookListItem book = {book}/>
                        </li>
                    );
                })
                }
            </ul>
        ); 
    }
};

const mapStateToProps = ({books,loading}) => {
    return{books, loading};
};

const mapDispatchToProps = {
    booksLoaded
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(BookList);


