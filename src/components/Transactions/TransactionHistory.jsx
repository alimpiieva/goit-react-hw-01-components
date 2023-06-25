import React from 'react';
import PropTypes from 'prop-types';
import {
    TransactionTable,
    TableHead,
    TableHeader,
    TableRow,
    TableCell,
    TableBody
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => (
    <TransactionTable>
        <TableHead>
            <TableRow>
                <TableHeader>Type</TableHeader>
                <TableHeader>Amount</TableHeader>
                <TableHeader>Currency</TableHeader>
            </TableRow>
        </TableHead>
        <TableBody>
            {items.map((transaction) => (
                <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
        </TableBody>
    </TransactionTable>    
);

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};

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
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
};

export default TransactionHistory;
