import React from 'react';
import PropTypes from 'prop-types';
import {
    TableRow,
    TableCell
}
    from './TransactionHistory.styled';

const TransactionItem = ({ transaction }) => {
    const { type, amount, currency } = transaction;

    return (
        <TableRow>
            <TableCell>{type}</TableCell>
            <TableCell>{amount}</TableCell>
            <TableCell>{currency}</TableCell>
        </TableRow>
    );
};  

TransactionItem.propTypes = {
    transaction: PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
};

export default TransactionItem;
