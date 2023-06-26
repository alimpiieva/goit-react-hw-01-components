import styled from '@emotion/styled';


export const ContainerFriends = styled.div`
  display: flex;
  justify-content: center

`;

export const FriendListItemContainer = styled.li`
  
  display: flex;
  justify-content: center;
  align-items: center;
  border: dotted grey;
  height: 62px;
  width: 145px;
  &:not(:last-child) {
    margin-right: 5px;
  }

  
  `;

export const StatusIndicator = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50% ;
 
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 55px;
`;

export const Name = styled.p`
  font-family: monospace;
  font-size: 18px;
  margin: 0;
`;
 
export const FriendListStyle = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
`; 