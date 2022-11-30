import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
//se importa el componente
import ShowEmployees from './components/ShowEmployees';
import CreateEmployee from './components/CreateEmployee';
import EditEmployee from './components/EditEmployee';
import MostrarEmpresas from './components/MostrarEmpresas';
import CrearEmpresa from './components/CrearEmpresa';
import EditarEmpresa from './components/EditarEmpresa';

function App() {
return (
<div className="App">
<BrowserRouter>
<Routes>

<Route path='/e' element={ <ShowEmployees/>} />
<Route path='/createe' element={ <CreateEmployee/>} />
<Route path='/edite/:id' element={ <EditEmployee/>} />
<Route path='/' element={ <MostrarEmpresas/>} />
<Route path='/create' element={ <CrearEmpresa/>} />
<Route path='/edit/:id' element={ <EditarEmpresa/>} />
</Routes>
</BrowserRouter>
</div>
);
}

export default App;