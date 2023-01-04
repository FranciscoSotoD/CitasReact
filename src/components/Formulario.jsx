import { useState, useEffect } from "react"

import Error from "./Error";

const Formulario = ( { pacientes, setPacientes, paciente, setPaciente } ) => {
  const [ nombre, setNombre ] = useState('');
  const [ propietario, setPropietario ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ fecha, setFecha ] = useState('');
  const [ sintomas, setSintomas ] = useState('');

  const [ error, setError ] = useState(false);

  useEffect( () => {
      if(Object.keys(paciente).length > 0) { 
        const { nombre, propietario, email, fecha, sintomas } = paciente
        setNombre(nombre)
        setPropietario(propietario)
        setEmail(email)
        setFecha(fecha)
        setSintomas(sintomas)
      } 
  }, [paciente] )

  // Generar un id único 
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validando el formulario
    if( [nombre, propietario, email, fecha, sintomas ].includes('') ) {
      console.log('Todos los campos son obligatorios.')
      setError(true)
      return;
    }

    setError(false);
    //console.log('Enviando Formulario...')

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }
    //console.log(objetoPaciente)

    if( paciente.id ) {
      // Editando el registro...
      //console.log(paciente)
      objetoPaciente.id = paciente.id
      //console.log(objetoPaciente)
      const pacienteActualizado = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )
      //console.log(pacienteActualizado)
      setPacientes(pacienteActualizado)
      setPaciente({})
    } else {
      // Nuevo Registro
      objetoPaciente.id = generarId()
      setPacientes( [...pacientes, objetoPaciente] )
    }

    // Reiniciando valores de los State (Hooks)
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');


  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-center text-3xl">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center">Añade Pacientes y 
      <span className="text-indigo-600 font-bold"> Administralos</span> 
      </p>

      <form
        onSubmit={ handleSubmit } 
        className="bg-white shadow-md rounded-lg py-10 px-5 mt-10 mb-10">      
        {/* Input Nombre Mascota */}
        <div className="mb-5">
          <label className="text-gray-700 uppercase font-bold" 
            htmlFor="inputNombre">Nombre Mascota</label>
          <input type="text"         
            className="border-2 rounded-md p-2 mt-2 placeholder-gray-400 focus:outline-none focus-visible:border-indigo-600 focus:transition-all w-full"
            id="inputNombre"
            placeholder="Nombre de la mascota"
            value={ nombre }
            onChange={ (e) => { setNombre(e.target.value) } }
            />
        </div>
        {/* Input Nombre Propietario */}
        <div className="mb-5">
          <label className="text-gray-700 uppercase font-bold" 
            htmlFor="inputPropietario">Nombre Propietario</label>
          <input type="text"             
            className="border-2 rounded-md p-2 mt-2 placeholder-gray-400 focus:outline-none focus-visible:border-indigo-600 focus:transition-all w-full"
            id="inputPropietario"
            placeholder="Nombre del propietario" 
            value={ propietario }
            onChange={ (e) => { setPropietario( e.target.value ) } }
            />
        </div>
        {/* Input Email */}
        <div className="mb-5">
          <label className="text-gray-700 uppercase font-bold" 
            htmlFor="inputEmail">Email</label>
          <input type="text"             
            className="border-2 rounded-md p-2 mt-2 placeholder-gray-400 focus:outline-none focus-visible:border-indigo-600 focus:transition-all w-full"
            id="inputEmail"
            placeholder="Email Contacto Propietario" 
            value={ email }
            onChange={ (e) => { setEmail( e.target.value ) } }
            />
        </div>
        {/* Input Fecha Alta */}
        <div className="mb-5">
          <label className="text-gray-700 uppercase font-bold" 
            htmlFor="inputAlta">Alta</label>
          <input type="date"             
            className="border-2 rounded-md p-2 mt-2 placeholder-gray-400 focus:outline-none focus-visible:border-indigo-600 focus:transition-all w-full"
            id="inputAlta"
            value={ fecha }
            onChange={ (e) => { setFecha( e.target.value ) } }
          />
        </div>
        {/* Input Sintomas */}
        <div className="mb-5">
          <label className="text-gray-700 uppercase font-bold" 
            htmlFor="inputSintomas">Sintomas</label>
          <textarea id="inputSintomas" 
            className="border-2 rounded-md p-2 mt-2 placeholder-gray-400 focus:outline-none focus-visible:border-indigo-600 focus:transition-all w-full minMaxTextArea"
            placeholder="Escribe los sintomas..." 
            value={ sintomas } 
            onChange={ (e) => { setSintomas( e.target.value ) } }
          />
        </div>

        { error && <Error> 
            <h2>Ups!</h2>
            <p>Todos los campos son obligatorios</p>
          </Error> }

        <input type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-800 cursor-pointer ease-in-out"
          value={ paciente.id ? "Editar Paciente" : "Agregar Nuevo Paciente" } />
        
      </form>

    </div>
  )
}

export default Formulario