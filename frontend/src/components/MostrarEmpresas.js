import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Paginado from "./Paginado";
import { DownloadTableExcel } from 'react-export-table-to-excel';

const endpoint = 'http://localhost/api'
const MostrarEmpresas = () => {

const [empresas, setEmpresas] = useState([])
useEffect ( ()=> {
getAllEmpresas()
}, [])

//paginado
const [paginaActual, setPaginaActual] = useState(1);
const [empresasPerPage, setEmpresasPerPage] = useState(10);
const iDeUltimaEmpresa = paginaActual * empresasPerPage;
const iDePrimeraEmpresa= iDeUltimaEmpresa - empresasPerPage;
const mostrarEmpresas = empresas.slice(
    iDePrimeraEmpresa,
iDeUltimaEmpresa
);

const paginado = (paginaActual) => {setPaginaActual(paginaActual);};

const tableRef = useRef(null);


const getAllEmpresas = async () => {
const response = await axios.get(`${endpoint}/empresas`)
setEmpresas(response.data)
}

const deleteEmpresas = async (id) => {

await axios.delete(`${endpoint}/empresas/${id}`)
getAllEmpresas()

}
return (
<div>
<div className='d-grid gap-2'>
<Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Crear Empresa</Link>
</div>
<table className='table table-striped' ref={tableRef}>

<thead className='bg-primary text-white'>
<tr>
<th>ID</th>
<th>Nombre</th>
<th>Activar Empresa</th>
{/* <th>img</th> */}
<th>Creado</th>
<th>Editar/borrar</th>
</tr>
</thead>
<tbody>
{ mostrarEmpresas.map( (empresas) => (
<tr key={empresas.id}>
<td>{empresas.id}</td>
<td>{empresas.nombre}</td>
<td>{empresas.activar_empresa === 1 ? "si" : "no" }</td>
{/* <img src={empresas.imagen} alt={empresas.imagen} className='img'></img> */}
<td>{empresas.created_at.slice(0, 16)
            .replace(/^(\d{4})-(\d{2})-(\d{2})$/g, "$3/$2/$1")}</td>
<td>
    {console.log(empresas)}
<Link to={`/edit/${empresas.id}`} className='btn btn-info'>Edit</Link>
<button onClick={ ()=>deleteEmpresas(empresas.id)} className='btn btn-danger'>Delete</button>
</td>
</tr>
))} 
</tbody>
</table>

    <div>
            <Paginado
        setEmpresasPerPage={setEmpresasPerPage}
        setCurrentPage={setPaginaActual}
        EmpresasPorPagina={empresasPerPage}
        Empresas={empresas.length}
        paginado={paginado}
        currentPage={paginaActual}
        />
    </div>


<DownloadTableExcel filename='Tabla-empresas' sheet="empresas" currentTableRef={tableRef.current}>
<button className='btn btn-success'>Exportar</button>
</DownloadTableExcel>
</div>
)
}

export default MostrarEmpresas