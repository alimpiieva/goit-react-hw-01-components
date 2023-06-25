import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  text-align: center;
  font-family: monospace;
`;

export const ProfileImage = styled.img`
  width: 256px;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  margin-bottom: 20px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 5px 0;
`;

export const Tag = styled.p`
  font-size: 16px;
  color: gray;
  margin: 5px 0;
`;

export const Location = styled.p`
  font-size: 16px;
  margin: 5px 0;
`;

export const Stats = styled.ul`
  list-style: none;
  display: grid;
  justify-content: space-around;
  padding: 0;
 
  align-items:center;
`;

export const StatsItem = styled.li`
  text-align: center;
  display: grid;
  align-items: center;
  justify-items: stretch
  

`;

export const Label = styled.span`
  font-size: 16px;
  color: gray;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
