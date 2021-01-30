import React, { Component } from 'react';
import BookListItem from '../book-list-item/book-list-item';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import withBookstoreService, {withBookService} from '../hoc/with-bookstore-service';
import { booksLoaded} from '../../actions/index';
import {compose}  from '../../utils/cpmpose';
import './book-list.css';

class BookList extends Component{

    componentDidMount(){
        const {bookstoreService} = this.props;
        const data = bookstoreService.getBooks();
        console.log(data);

        this.props.booksLoaded(data);
    }


    render (){
        const { books } = this.props;
        return(
            <ul>
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

const mapStateToProps = ({books}) => {
    return{books};
};

const mapDispatchToProps = {
    booksLoaded
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(BookList);


