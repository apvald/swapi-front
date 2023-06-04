import LeftArrowIcon from '../../atoms/leftArrowIcon'
import Subtitle from '../../atoms/subtitle'
import './style.css'

/** Interface para los props del componente del Navbar */
interface NavProps {
  isPersonSelected: boolean
  person: { id: number, name?: string }
  onBack() : void
}

/**
 * Returns Navbar
 *   
 * Componente para un navbar
 * @prop {boolean} isPersonSelected
 * @prop {object} person
 * @prop {function} onBack
*/
export default function Navbar (
  {
    isPersonSelected,
    person,
    onBack
  } : NavProps ) {
  return (
    <nav className='navbar'>
      <button className={'navbar-back'+(isPersonSelected?' show':'')} onClick={onBack}>
        <LeftArrowIcon />
      </button>
      <Subtitle className='sub-web' color='light'>
        Ravn Start Wars Registry
      </Subtitle>
      <Subtitle className='sub-mob' color='light'>
        { person.name ? person.name :'People of Star Wars'}
      </Subtitle>
    </nav>
  )
}
