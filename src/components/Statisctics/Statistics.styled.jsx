import styled from '@emotion/styled';

export const Section = styled.section`
  text-align: center;
  border: 2px solid;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
  margin: 0 auto 20px auto;
  margin-bottom: ;
`;

export const StatList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  font-family: monospace;
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const Percentage = styled.span`
  font-size: 14px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: monospace;
`;
