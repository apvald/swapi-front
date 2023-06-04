import PersonCell from "../../molecules/personCell";
import LoaderIndicator from "../../molecules/loaderIndicator";
import NoticeCell from "../../molecules/noticeCell";
import peopleList from "../../../graphql/queries/peopleList";

import "./style.css";

/** Interface para los props del componente del sidebar */
interface SidebarProps {
  setPerson: (id: number, name: string) => void;
  isPersonSelected: boolean;
}

/** Interface para los props de cada personaje */
interface ICharacter {
  id: number;
  name: string;
  species: {
    name: string;
  }[];
  homeworld: {
    name: string;
  };
}

/**
 * Returns Sidebar
 *   
 * Componente Sidebar
 * @prop {function} setPerson
 * @prop {boolean} isPersonSelected
*/
export default function Sidebar({ setPerson, isPersonSelected }: SidebarProps) {
  /** hook para el consumo de graphql para obtener una lista de personajes, useQuery */
  const { data, loading, error } = peopleList();

  /** actualiza el State person del componente padre */
  function selectPerson(_: unknown, id: number, name: string) {
    setPerson(id, name);
  }

  return (
    // Si está cargando o existe un personaje, se activa la clase "none" para ocultar el componente en responsive
    <div className={"sidebar" + (isPersonSelected ? " none" : "")}>
      {
        // Validamos si está cargando y mostramos el 'loader'
        loading ? (
          <LoaderIndicator />
        )
        // Validamos si hay error y mostramos componente 'NoticeCell'
        : error ? ( 
          <NoticeCell />
        )
        // De existir los personajes, se muestran
        : (
          <>
            {data.listPeople.map((character: ICharacter) => (
              <button
                type="button"
                key={character.id}
                onClick={(event) =>
                  selectPerson(event, character.id, character.name)
                }
              >
                <PersonCell
                  name={character.name}
                  descripcion={
                    (character.species[0]?.name || "Human") +
                    " from " +
                    (character.homeworld.name || "")
                  }
                />
              </button>
            ))}
          </>
        )
      }
    </div>
  );
}
