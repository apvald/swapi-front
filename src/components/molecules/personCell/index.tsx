import ChevronRightIcon from '../../atoms/chevronRightIcon'
import Paragraph from '../../atoms/paragraph'
import Subtitle from '../../atoms/subtitle'
import './style.css'

/** Interface para los props del componente del PersonCell */
interface PersonProps extends React.PropsWithChildren{
  name: string,
  descripcion: string,
}

/**
 * Returns PersonCell
 *   
 * Componente para un celda de personaje
 * @prop {string} name
 * @prop {string} descripcion
*/
export default function PersonCell ( {name, descripcion}: PersonProps) {
  return (
    <div className='person-cell'>
      <div className='person--wrapper'>
        <div className='person'>
          <Subtitle>{name}</Subtitle>
          <Paragraph color='low'>{descripcion}</Paragraph>
        </div>
        <div className='icon'>
          <ChevronRightIcon/>
        </div>
      </div>
    </div>
  )
}
