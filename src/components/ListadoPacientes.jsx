import Paciente from "./Paciente"

const ListadoPacientes = ( { pacientes, setPaciente, eliminarPaciente } ) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 pb-10">
        { pacientes.length > 0 ? (
          <>
            <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
            <p className="text-xl text-center mt-5">
              Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>

            {/* Componente de Paciente */}               
            <div className="md:h-screen md:overflow-y-scroll">
              { pacientes.map( ( paciente ) => {
                return(
                  <Paciente 
                    key={ paciente.id }
                    paciente={ paciente }
                    setPaciente={ setPaciente }
                    eliminarPaciente={eliminarPaciente}
                  />
                )
              } ) }          
            </div>
            
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
            <p className="text-xl text-center mt-5">
              Comienza agregando <span className="text-indigo-600 font-bold">nuevos Pacientes</span>
            </p>
          </>
        ) }
        

    </div>
  )
}

export default ListadoPacientes