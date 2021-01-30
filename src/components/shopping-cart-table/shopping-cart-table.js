import React from 'react';
import './shopping-cart-table.css';

const ShoppingCartTable = () =>{
    return(
        <div className='shopping-cart-rable'>
            <h2>Your order</h2>
            <table className='table'>
                <thead>
                    <th>#</th>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <td>#</td>
                    <td>Site Reliability Engineering</td>
                    <td>2</td>
                    <td>40$</td>
                        <button className='btn btn-outline-danger'>
                            <i className='fa fa-plus-circle'/>
                        </button>
                        <button className='btn btn-outline-success'>
                            <i className='fa fa-plus-circle'/>
                        </button>
                        <button className='btn btn-outline-warning'>
                            <i className='fa fa-plus-circle'/>
                        </button>
                </tbody>
            </table>
            <div className='total'>
                Total: $201
            </div>
        </div>
    )
};

export default ShoppingCartTable;