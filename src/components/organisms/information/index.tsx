import { useState, useEffect } from "react";
import './style.css'
import SectionHeader from '../../molecules/sectionHeader'
import DataCell from '../../molecules/dataCell'
import LoaderIndicator from '../../molecules/loaderIndicator'
import NoticeCell from '../../molecules/noticeCell'
import getPerson from "../../../graphql/queries/getPerson";

interface  InformationProps {
  id: number
  setInfo: (data: undefined|object, searching: boolean) => void
}

export default function Information ({id, setInfo}: InformationProps) {

  const [isPerson, setIsPerson] = useState<boolean>(false)

  const { data, loading, error } = getPerson(id);

  useEffect(() => {
    if(data && data.person && !error) {
      setIsPerson(true)
      setInfo(data.person, loading);
    }else{
      setIsPerson(false)
      setInfo(undefined, loading);
    }
  }, [data, loading])
  
  
  return (
    <div className={'content'+(isPerson || loading && id?' show':'')}>
      {
        loading && !!id ? (<LoaderIndicator/>) :
        error && !!id ? (<NoticeCell/>)
        : (
          data && isPerson? (
            <>
              <SectionHeader>General Information</SectionHeader>
              <DataCell nombre='Eye Color' desc={data?.person?.eye_color}/>
              <DataCell nombre='Hair Color' desc={data?.person?.hair_color}/>
              <DataCell nombre='Skin Color' desc={data?.person?.skin_color}/>
              <DataCell nombre='Birth Year' desc={data?.person?.birth_year}/>
              {
                (data?.person?.vehicles.length)
                ?(<>
                  <SectionHeader>Vehicles</SectionHeader>
                  {
                    data?.person?.vehicles.map( ({ name }: {name: string}) => (
                      <DataCell key={name} nombre={name}/>
                    ))
                  }
                </>)
                :(<></>)
              }
            </>
          ) : 
          (
            <></>
          )
        )
      }
    </div>
    
  )
}
