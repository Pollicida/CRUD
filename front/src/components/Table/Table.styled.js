import styled from 'styled-components';

export const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
  background-color: #4caf50;
  color: white;
`;

export const TableData = styled.td`
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #ddd;
  }
`;

export const TableCaption = styled.caption`
  font-size: 1.5em;
  margin: 10px 0;
`;

export const BotonEstiladoEditar = styled.button`
  background-color: transparent;
  color: #ff4d4d;
  border: 2px solid #ff4d4d;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #8ce53d;
    color: white;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(255, 77, 77, 0.5);
  }
`;

export const BotonEstiladoDelete = styled.button`
  background-color: transparent;
  color: #ff4d4d;
  border: 2px solid #ff4d4d;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #ff4d4d;
    color: white;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(255, 77, 77, 0.5);
  }
`;