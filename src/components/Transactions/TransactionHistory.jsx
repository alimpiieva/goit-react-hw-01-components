import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem  from './TransactionItem.jsx';

import {
    TransactionTable,
    TableHead,
    TableRow,
    TableHeader,
    TableBody
}
    from './TransactionHistory.styled';

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
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};


export default TransactionHistory;
