import React, { Component } from 'react';
import BookListItem from '../book-list-item/book-list-item';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import withBookstoreService, {withBookService} from '../hoc/with-bookstore-service';
import Spinner from '../../components/spinner/spinner';
import ErrorIndicator from '../../components/error-indicator/error-indicator';
import { fetchBooks} from '../../actions/index';
import {compose}  from '../../utils/cpmpose';
import './book-list.css';

class BookList extends Component{

    componentDidMount(){
        this.props.fetchBooks();
    }

    render (){
        const { books, loading, error } = this.props;
        if(loading){
            return <Spinner/>
        }
        if(error){
            return <ErrorIndicator />
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

const mapStateToProps = ({books,loading, error}) => {
    return{books, loading, error};
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return{
        fetchBooks: fetchBooks(bookstoreService, dispatch)
        
    };
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(BookList);


