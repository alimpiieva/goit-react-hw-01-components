import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

export const TableHeader = styled.th`
  padding: 10px;
  font-weight: bold;
  text-align: left;
  font-size: 22px;
`;

export const TableBody = styled.tbody`
  font-family: monospace;   
`;

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
  font-size: 18px;
`;

export const TableCell = styled.td`
  padding: 10px;
`;
