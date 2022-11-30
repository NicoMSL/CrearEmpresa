import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost/api/empresas/'

const EditarEmpresa = () => {

const [nombre, setNombre] = useState('')
const [activar_empresa, setActivarEmpresa] = useState(false)
const [imagen, setImagen] = useState('no img')
const navigate = useNavigate()

const {id} = useParams()

async function uploadImage(file) {
    const formData = new FormData();
    formData.append("file", file[0]);
    formData.append("upload_preset", "kl8ubh2v");
    const imgUrl = await axios
      .post("https://api.cloudinary.com/v1_1/nicomsl/image/upload", formData)
      .then((response) => response.data.secure_url);
      setImagen(imgUrl);
    console.log(imgUrl);
  }

const update = async (e) => {
e.preventDefault();
await axios.put(`${endpoint}${id}`, {nombre: nombre, activar_empresa: activar_empresa, imagen: imagen})
navigate('/')
}

useEffect( () =>{

const getEmpresaById = async () => {
const response = await axios.get(`${endpoint}${id}`)
setNombre(response.data.nombre)
setActivarEmpresa(response.data.activar_empresa)
setImagen(response.data.imagen)
}
getEmpresaById()

}, [])
return (
<div>
<h2>Editar empresa</h2>
<form onSubmit={update}>
<div className='mb-3'>
<label className='form-label'>nombre</label>
<input 
value={nombre} 
onChange={ (e)=> setNombre(e.target.value)}
type='text'
className='form-control'
/>
</div>

<div className='mb-3'>
<label className='form-label'>Cambiar imagen</label><br/>
<img src={imagen} alt="no tiene imagen" className='img'/><br/>
<input
            type="file"
            onChange={(e) => {
                uploadImage(e.target.files);
            }}
            />
</div>

<div className='mb-3'>
<label className='form-label'>activar_empresa</label><br/>
<input 
checked={activar_empresa}
onChange={() => setActivarEmpresa(!activar_empresa)}

type='checkbox'
/>
</div>

<button type='submit' className='btn btn-success'onClick={()=>test()}>Save</button>
</form>


</div>
)
}

export default EditarEmpresa