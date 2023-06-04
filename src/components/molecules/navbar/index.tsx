import LeftArrowIcon from '../../atoms/leftArrowIcon'
import Subtitle from '../../atoms/subtitle'
import './style.css'

interface NavProps {
  isPersonSelected: boolean
  person: { id: number, name?: string }
  onBack() : void
}

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
