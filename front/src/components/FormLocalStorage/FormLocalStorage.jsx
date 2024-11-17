import { useState, useEffect } from "react";
import { FormEstilado, LabelEstilado, InputEstilado, BotonEstilado } from "./formLocalStorage.styled";

export default function FormLocalStorage({valuesForm, callBackEditFromForm, title}) {
	const [values, setValues] = useState(valuesForm);
	console.log(valuesForm);
	const HandleChange = (e) => {
		const { name, value } = e.target;
		setValues((prevData) => (
			{
				...prevData,
				[name]: value
			}
		));
	};
	
	useEffect(() => {
        setValues(valuesForm);
    }, [valuesForm]);
	const HandleCancel = (e) => {
		e.preventDefault();
		setValues({
			numeroIne: '',
			nombre: '',
			apellido: '',
			telefono: '',
			correo: ''
		});
		window.location.reload();
	}

	//POST
	const agregarRegistro = async (values) => {
		const res = await fetch(
			'http://localhost:3001/postData',
			{
				method: 'POST',
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(
					{...values}
				),
			}
		)
	};

	const HandleSubmit = (e) => {	
		e.preventDefault();
		if(title === 'Editar Registro'){
			callBackEditFromForm(values);
		}else{
			agregarRegistro(values);
		}
		window.location.reload();
	};
	return (
		<>
			<FormEstilado onSubmit={HandleSubmit}>
				<h1>{title}</h1>
				<LabelEstilado htmlFor="documento">Documento</LabelEstilado>
				<InputEstilado required id="documento" name="documento" onChange={HandleChange} type="text" value={values.documento} />
				<LabelEstilado htmlFor="nombre">Nombre</LabelEstilado>
				<InputEstilado required id="nombre" name="nombre" onChange={HandleChange} type="text" value={values.nombre} />
				<LabelEstilado htmlFor="apellido">Apellido</LabelEstilado>
				<InputEstilado required id="apellido" name="apellido" onChange={HandleChange} type="text" value={values.apellido}></InputEstilado>
				<LabelEstilado htmlFor="correo">Correo</LabelEstilado>
				<InputEstilado required id="correo" name="correo" onChange={HandleChange} type="email" value={values.correo}></InputEstilado>
				<LabelEstilado htmlFor="telefono">Teléfono</LabelEstilado>
				<InputEstilado required id="telefono" name="telefono" onChange={HandleChange} type="text" value={values.telefono}></InputEstilado>
				<BotonEstilado type="submit">{title}</BotonEstilado>
				<BotonEstilado onClick={HandleCancel}>Cancelar</BotonEstilado>
			</FormEstilado>
		</>
	)
};