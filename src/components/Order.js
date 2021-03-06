import React from 'react';
import OrderView from './OrderView';

class Order extends React.Component {
    render() {
        const orderedBooks = this.props.order.map((book, index) => (
            <OrderView
                key={index}
                book={book}
                removeFromOrder={this.props.removeFromOrder}
            />
        ))
        return (
            <div className='order col-md-6'>
                <h2>Your order:</h2>
                {orderedBooks}
            </div>
        )
    }
}

export default Order;