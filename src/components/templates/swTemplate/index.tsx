import { useState } from "react";
import Navbar from "../../molecules/navbar";
import Information from "../../organisms/information";
import Sidebar from "../../organisms/sidebar";

import './style.css'

/**
 * Returns SwTemplate // Start Wars Template for Page
 *   
 * Componente SwTemplate
*/
export default function SwTemplate() {

  /** 
   * state para person o personaje
   * guardamos el id y el nombre
   * del personaje seleccionado en el SIDEBAR
   * para realizar la búsqueda de toda su información
  */
  const [person, setPerson] = useState<{id:number, name?: string}>({id: 0})

  /**
   * state para info o la información del personaje a buscar
   * guardamos la información del personaje que se busca después de seleccionar en el SIDEBAR
   * se enviará al componente de información
  */
  const [info, setInfo] = useState<undefined|object>(undefined)

  /**
   * state para loading
   * validamos que se se haya realizado la consulta
   * al query de graphql después de seleccionar un personaje en el SIDEBAR
  */
  const [isLoading, setIsLoading] = useState<boolean>(false)

  /** Function para asignar valores al state de person */
  function selectPerson(id: number, name: string){
    setPerson({id, name});
  }

  /**
   * Function para asignar valores de
   * la información encontrada y estado si está realizando la búsqueda(loading)
  */
  function findPersonInfo(data: undefined|object, searching: boolean){
    setInfo(data);
    setIsLoading(searching)
  }

  /**
   * Function back() llamada al dar click en el boton '<-' [atrás] en responsive
   * retrocede al sidebar
  */
  function back(){
    /**
     * Se reasigna los states a inicial
     * al no tener valores en responsive 'isPersonSelected' será false
     * retornando la vista al sidebar
    */
    setPerson({id:0})
    setInfo(undefined)
    setIsLoading(false)
  }

  /**
   * boolean para uso en responsive del cambio de pantalla
   * de sidebar(false) al de información(true) que valida si:
   * está realizando la búsqueda
   * o ya dió click en un personaje en el SIDEBAR
   * o ya encontró la información completa de un personaje
  */
  const isPersonSelected = !!info || isLoading && !!person.id;

  return (
    <>
      <Navbar
        isPersonSelected={isPersonSelected} // requerido como boolean - valida la interacción en el sidebar
        person={person} // requerido como {id, name} - información con el nombre del personaje para cambiar el título
        onBack={back} // requerido como function - función para retroceder al sidebar
      />
      <div className='main'>
        <Sidebar
          setPerson = { selectPerson } // requerido como function - asigna el valor del personaje seleccionado del sidebar
          isPersonSelected={isPersonSelected} // requerido como boolean - valida la interacción en el sidebar
        />
        <Information
          id={person.id} // requerido como number - prop id
          setInfo={ findPersonInfo } // requerido como function - guarda la información del personaje en el state info
        />
      </div>
    </>
  )
}
