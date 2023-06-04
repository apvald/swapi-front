import ChevronRightIcon from '../../atoms/chevronRightIcon'
import Paragraph from '../../atoms/paragraph'
import Subtitle from '../../atoms/subtitle'
import './style.css'

interface PersonProps extends React.PropsWithChildren{
  name: string,
  descripcion: string,
}


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
