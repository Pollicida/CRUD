import { useState } from "react";
import { ListaEstilada, OutputEstilado, LabelEstilado } from "./lista.styled";
 
export default function Lista({ data }) {
	const clavesForm = Object.keys(data)
	return (
		<>
			<ListaEstilada>
				<h1>Datos Estudiante</h1>
				{clavesForm.map((clave) =>
					<div key={clave}>
						<LabelEstilado>{clave}</LabelEstilado>
						<OutputEstilado> {data[clave]}</OutputEstilado>
					</div>
				)}
			</ListaEstilada>
			
		</>
	)
}