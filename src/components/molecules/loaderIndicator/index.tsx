import LoaderIcon from '../../atoms/LoaderIcon'
import Subtitle from '../../atoms/subtitle'
import './style.css'

export default function LoaderIndicator () {
  return (
    <div className='loader'>
      <div className='loader-wrapper'>
        <LoaderIcon />
        <Subtitle color='low'>Loading</Subtitle>
      </div>
    </div>
  )
}
