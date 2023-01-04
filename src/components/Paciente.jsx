
const Paciente = ( { paciente, setPaciente, eliminarPaciente } ) => {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  return (
    <div className="bg-white shadow-md rounded-lg py-10 px-5 mt-10 md:ml-3">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font normal-case">{ nombre }</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
            <span className="font normal-case">{ paciente.propietario }</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font normal-case">{ paciente.email }</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
            <span className="font normal-case">{ paciente.fecha }</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
            <span className="font normal-case">{ paciente.sintomas }</span>
        </p>

        <div className="flex justify-between">
            <button 
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white uppercase font-bold rounded-md transition-all ease-out"
            onClick={ () => setPaciente( paciente ) }
            >
                Editar
            </button>

            <button 
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white uppercase font-bold rounded-md transition-all ease-out"
            onClick={ () => { eliminarPaciente(id) } }
            >
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default Paciente