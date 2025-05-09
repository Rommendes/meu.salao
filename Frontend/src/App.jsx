import React ,{ useState } from "react"
import {  Routes, Route} from "react-router-dom"
import 'material-icons/iconfont/material-icons.css'


import Login from './Pages/Login'
import Home from "./Pages/Home"
import CadastrarCliente from "./Componentes/CadastrarCliente/CadastrarCliente";
import ListaClientes from "./Componentes/ListaClientes/ListaClientes.jsx"
import EditarCliente from "./Componentes/EditarCliente/editarCliente.jsx"
import Agenda from "./Componentes/Agenda/Agenda.jsx"
import BuscaCliente from "./Componentes/Clientes/buscaCliente.jsx"
import HistoricoSemanal from "./Componentes/Agenda/HistoricoSemanal.jsx"
import CobrancasPendentes from "./Componentes/api/EnviarCobrancasPendentes.jsx"


function App() {
  
  const [ setIsAuthenticated] = useState(false);
  return (
    

   <div>
    <Routes >
      <Route path="/"element= { <Login setIsAuthenticated={setIsAuthenticated}/> }/>
      <Route path="/busca-cliente" element={<BuscaCliente />} />
      <Route path="/home" element = { <Home/> }/>
      <Route path="/cadastrar-cliente" element= { <CadastrarCliente/> }/>
      <Route path="/lista-clientes" element={ <ListaClientes/> } />
    
      <Route path="/editar-cliente" element={ <EditarCliente/> }/>
      <Route path="/agenda" element= { <Agenda/> }/>
      <Route path="/historico-semanal" element= { <HistoricoSemanal/> }/>
      <Route path="cobrancas" element= { <CobrancasPendentes/> }/>
  
    </Routes>
    </div>
   
  )
}

export default App
