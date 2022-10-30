//import axios from 'axios';
import React from 'react'
import DropDownCountry from './components/forms/dropdownCountry';
import DropDownCidade from './components/forms/dropdownCity';
//import {useForm} from 'react-hook-form'

// APIs
//import apiCountry from './apiCountry';

function App() {
  //const [selects, setSelects]=useState();
  return (
    
    <div className='container'>

      <div className='header'></div>

      <div className='card-post'>
        <h1>Dados Pessoais</h1>
        <div className='card-body-post'>

          <form>

            <div className='fields'>
              <label>Nome</label>
              <input placeholder='Nome' type="text" />
            </div>

            <div className='fields'>
              <label>E-mail</label>
              <input placeholder='exemplo@email.com' type="text" />
            </div>

            <div className='fields'>
              <label>Telefone</label>
              <input placeholder='(11) 98741-5287' type="text" />
            </div>

            <div className='fields'>
              <label>CPF</label>
              <input placeholder='xxx.xxx.xxx-xx' type="text" />
            </div>

          </form>

        </div>
      </div>

      

      <div className='card-loc'>
        <div className='card-location'>
          <h1>Destino de Interesse</h1>

          <div className='card-body-location'>

            <div className='fields'>
              <form>
                <label htmlFor='pais'>País</label>
                <select className='cidade'>
                  <option>Selecione um país</option>
                </select>
              </form>
            </div>

            <div className='fields'>
              <form>
                <label htmlFor='cidade'>Cidade</label>
                <select className='cidade'>
                    <option>Selecione uma cidade</option>
                </select>
              </form>
            </div>

          </div>

        </div>
      </div>

      

      <div className='btn-enviar'>
        <button className='btn-enviar button'>Enviar</button>
      </div> 

    </div>
    
  )
}

export default App;