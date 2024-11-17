import React, { useEffect, useState } from 'react';
import { TableStyled, TableHeader, TableData, TableRow, TableCaption, BotonEstiladoDelete, BotonEstiladoEditar } from './Table.styled.js';

export default function Table({callbackEditFromTable, data}) {
  const [registros, setRegistros] = useState(data);
  //Eliminar Registro (DELETE)
  async function HandleDelete(id){
    const res = await fetch('http://localhost:3001/deleteData',
      {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {id}
        ),
      }
    )
    window.location.reload();
  };

  async function HandleEdit(estudiante) {
    callbackEditFromTable(estudiante);
  };

  return (
    <TableStyled>
      <TableCaption>Lista de Estudiantes</TableCaption>
      <thead>
        <TableRow>
          <TableHeader>Documento</TableHeader>
          <TableHeader>Nombre</TableHeader>
          <TableHeader>Apellido</TableHeader>
          <TableHeader>Correo</TableHeader>
          <TableHeader>Teléfono</TableHeader>
          <TableHeader></TableHeader>
          <TableHeader></TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {registros.map((estudiante) => (
          <TableRow key={estudiante.id}>
            <TableData>{estudiante.documento}</TableData>
            <TableData>{estudiante.nombre}</TableData>
            <TableData>{estudiante.apellido}</TableData>
            <TableData>{estudiante.correo}</TableData>
            <TableData>{estudiante.telefono}</TableData>
            <TableData><BotonEstiladoEditar onClick={() => HandleEdit(estudiante)}>Editar</BotonEstiladoEditar></TableData>
            <TableData><BotonEstiladoDelete onClick={() => HandleDelete(estudiante.id)}>Eliminar</BotonEstiladoDelete></TableData>
          </TableRow>
        ))}
      </tbody>
    </TableStyled>
  );
};