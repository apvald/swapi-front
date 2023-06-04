import { useState, useEffect } from "react";
import SectionHeader from "../../molecules/sectionHeader";
import DataCell from "../../molecules/dataCell";
import LoaderIndicator from "../../molecules/loaderIndicator";
import NoticeCell from "../../molecules/noticeCell";
import getPerson from "../../../graphql/queries/getPerson";

import "./style.css";

/** Interface para los props del componente de la información del personaje */
interface InformationProps {
  id: number;
  setInfo: (data: undefined | object, searching: boolean) => void;
}

/**
 * Returns Information
 *   
 * Componente Information
 * @prop {number} id
 * @prop {function} setInfo
*/
export default function Information({ id, setInfo }: InformationProps) {

  /** state boolen que define el estado de si entontró o no la información de un personaje */
  const [isPerson, setIsPerson] = useState<boolean>(false);

  /** hook para el consumo de graphql para obtener la info del personaje, usa useQuery */
  const { data, loading, error } = getPerson(id);

  /** 
   * useEffect para los cambios en el resultado y búsqueda del hook gql
   * actualiza el State isPerson, y el State info del componente padre
  */
  useEffect(() => {
    if (data && data.person && !error) {
      setIsPerson(true);
      setInfo(data.person, loading);
    } else {
      setIsPerson(false);
      setInfo(undefined, loading);
    }
  }, [data, loading]);

  return (
    // Si está cargando o existe un personaje, se activa la clase "show" para mostrar el componente en responsive
    <div className={"content" + (isPerson || (loading && id) ? " show" : "")}>
      {
        // Validamos si está cargando y mostramos el 'loader'
        loading && !!id ? (
          <LoaderIndicator />
        )
        // Validamos si hay error y mostramos componente 'NoticeCell'
        : error && !!id ? (
          <NoticeCell />
        )
        // Validamos si existe la información y se muestra
        : data && isPerson ? (
          <>
            <SectionHeader>General Information</SectionHeader>
            <DataCell nombre="Eye Color" desc={data?.person?.eye_color} />
            <DataCell nombre="Hair Color" desc={data?.person?.hair_color} />
            <DataCell nombre="Skin Color" desc={data?.person?.skin_color} />
            <DataCell nombre="Birth Year" desc={data?.person?.birth_year} />
            {data?.person?.vehicles.length ? (
              <>
                <SectionHeader>Vehicles</SectionHeader>
                {data?.person?.vehicles.map(({ name }: { name: string }) => (
                  <DataCell key={name} nombre={name} />
                ))}
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )
      }
    </div>
  );
}
