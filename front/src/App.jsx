import { useState, useEffect } from 'react'
import './App.css'
import FormLocalStorage from './components/FormLocalStorage'
import Table from './components/Table'

function App(){
  const [reload,setReload] = useState(false);
  const [recargar,setRecargar] = useState(false);
  const [showTable,setShowTable] = useState(false);
  const [data,setData] = useState([]);
  const [edit,setEdit] = useState(false);
  const [valuesForm,setValuesForm] = useState({
    nombre: '',
    apellido: '',
    documento: '',
    telefono: '',
    correo: ''
  });

  //GET
  useEffect(() => {
      async function fetchData(){
        const res = await fetch('http://localhost:3001/getData');
        const datos = await res.json();
        setData(datos.data);
      }
      fetchData(); 
    }
  ,[reload]);

  useEffect(() => {
    data.length > 0 ? setShowTable(true) : setShowTable(false);
  },[data]);

  useEffect(() => {
    setRecargar(true);
  },[valuesForm]);


  function callbackEditFromTable(estudiante){
    setValuesForm(estudiante);
    setEdit(true);
  };
  function callbackEditFromForm(estudianteNew){
    Edit(estudianteNew);
  }
  //PUT
  async function Edit(values){
    const res = await fetch(
      'http://localhost:3001/editData',
      {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          { ...values }
        ),
      }
    )
    setReload(!reload);
  };

  return (
    <div id="body">
      <div id="divForm">
        {
          recargar && <FormLocalStorage valuesForm={valuesForm} callBackEditFromForm={callbackEditFromForm} title={edit ? 'Editar Registro' : 'Agregar Registro'}></FormLocalStorage>
        }
      </div>
      {showTable &&
        <div id="divLista">
          <Table callbackEditFromTable={callbackEditFromTable} data={data}></Table>
        </div>
      }
    </div>
  )
}
export default App;