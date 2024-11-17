import { useState } from "react";
import { FormEstilado, LabelEstilado, InputEstilado, BotonEstilado } from "./form.styled";

export default function Form({ callbackForm }) {
	const [values, setValues] = useState({
		numeroIne: '',
		nombre: '',
		apellido: '',
		telefono: '',
		correo: ''
	});
	const HandleChange = (e) => {
		const { name, value } = e.target;
		setValues((prevData) => ({
			...prevData,
			[name]: value
		}
		));
	};

	const HandleSubmit = (e) => {
		e.preventDefault();
		callbackForm(values);
	}

	const HandleReset = (e) => {
		e.preventDefault();
		setValues({
			numeroIne: '',
			nombre: '',
			apellido: '',
			telefono: '',
			correo: ''
		});
		callbackForm({
			numIne: '',
			nombre: '',
			apellido: '',
			telefono: '',
			correo: ''
		});
	}

	return (
		<>
			<FormEstilado onSubmit={HandleSubmit}>
				<h1>Formulario Estudiante</h1>
				<LabelEstilado htmlFor="numeroIne">Num.Ine</LabelEstilado>
				<InputEstilado id="numeroIne" name="numeroIne" onChange={HandleChange} type="text" value={values.numeroIne} />
				<LabelEstilado htmlFor="nombre">Nombre</LabelEstilado>
				<InputEstilado id="nombre" name="nombre" onChange={HandleChange} type="text" value={values.nombre} />
				<LabelEstilado htmlFor="apellido">Apellido Paterno</LabelEstilado>
				<InputEstilado id="apellido" name="apellido" onChange={HandleChange} type="text" value={values.apellido}></InputEstilado>
				<LabelEstilado htmlFor="telefono">Teléfono</LabelEstilado>
				<InputEstilado id="telefono" name="telefono" onChange={HandleChange} type="text" value={values.telefono}></InputEstilado>
				<LabelEstilado htmlFor="correo">Correo</LabelEstilado>
				<InputEstilado id="correo" name="correo" onChange={HandleChange} type="email" value={values.correo}></InputEstilado>
				<BotonEstilado type="submit">Guardar Datos</BotonEstilado>
				<BotonEstilado type="reset" onClick={HandleReset}>Restablecer</BotonEstilado>
			</FormEstilado>
		</>
	)
};