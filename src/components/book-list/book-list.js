import React, { Component } from 'react';
import BookListItem from '../book-list-item/book-list-item';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import withBookstoreService, {withBookService} from '../hoc/with-bookstore-service';
import Spinner from '../../components/spinner/spinner';
import ErrorIndicator from '../../components/error-indicator/error-indicator';
import { fetchBooks, bookAddedToCart} from '../../actions/index';
import {compose}  from '../../utils/cpmpose';
import './book-list.css';

const BookList = ({books, onAddedToCart}) => {
    return(
        <ul className='book-list'>
            {
            books.map((book) => {
                return(
                    <li key = {book.id}>
                        <BookListItem 
                            book = {book}
                            onAddedToCart = {() => onAddedToCart(book.id)}
                        />
                    </li>
                );
            })
            }
        </ul>
    );
};


class BookListContainer extends Component{

    componentDidMount(){
        this.props.fetchBooks();
    }

    render (){
        const { books, loading, error, onAddedToCart } = this.props;
        if(loading){
            return <Spinner/>
        }
        if(error){
            return <ErrorIndicator />
        }
    return <BookList books = {books} onAddedToCart = {onAddedToCart}/>;
     }
}


const mapStateToProps = ({ bookList: {books, loading, error}}) => {
    return{books, loading, error};
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return{
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
        
    };
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(BookListContainer);


