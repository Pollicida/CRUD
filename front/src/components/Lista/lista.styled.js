import styled from "styled-components";

export const ListaEstilada = styled.div`
  display: flex;
	flex-direction: column;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

export const LabelEstilado = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
`;

export const OutputEstilado = styled.div`
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:focus {
    border-color: #6200ee;
    outline: none;
  }
`;