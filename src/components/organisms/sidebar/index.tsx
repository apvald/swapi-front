import PersonCell from '../../molecules/personCell'
import './style.css'
import LoaderIndicator from '../../molecules/loaderIndicator'
import NoticeCell from '../../molecules/noticeCell'
import peopleList from '../../../graphql/queries/peopleList'

interface SidebarProps {
  setPerson: (id: number, name: string) => void
  isPersonSelected: boolean
}

interface ICharacter {
  id: number,
  name: string,
  species: {
    name: string
  }[],
  homeworld: {
    name: string
  },
}

export default function Sidebar ({setPerson, isPersonSelected} : SidebarProps) {
  
  const {data, loading, error} = peopleList();
  function selectPerson(_: React.MouseEvent<HTMLButtonElement>, id: number, name: string) {
    setPerson(id, name);
  }

  return (
    <div className={'sidebar'+(isPersonSelected?' none':'')}>
    {
      loading ? (<LoaderIndicator/>): 
      error ? (<NoticeCell/>) :
      (
      <>
        {
          data.listPeople.slice(0,7).map( (character: ICharacter) => (
            <button type='button' key={character.id} onClick={ (event) => selectPerson(event , character.id, character.name) }>
              <PersonCell
                name={character.name}
                descripcion={(character.species[0]?.name||'Human')+' from '+(character.homeworld.name||'')}
              />
            </button>
          ) )
        }
      </>
      )
    }
    </div>
  )
}
