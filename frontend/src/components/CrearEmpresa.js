import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost/api/empresas'
const CrearEmpresa = () => {

const [nombre, setNombre] = useState('')
const [activar_empresa, setActivarEmpresa] = useState(false)
const [imagen, setImagen] = useState('no img')
const navigate = useNavigate()

const store = async (e) => {
e.preventDefault();
await axios.post(endpoint, {nombre: nombre, activar_empresa: activar_empresa, imagen: imagen})
navigate('/')

}

function test(){
console.log(nombre, activar_empresa, imagen)
}

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



return (
<div>
<h2>Crear nueva empresa</h2>
<form onSubmit={store}>
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
<img src={imagen} alt="Subir imagen" className='img'/><br/>
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
onChange={() => setActivarEmpresa(!activar_empresa)}
type='checkbox'
/>
</div>


<button type='submit' className='btn btn-success'onClick={()=>test()}>Save</button>
</form>
</div>
)
}

export default CrearEmpresa