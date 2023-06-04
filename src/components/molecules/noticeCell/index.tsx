import Subtitle from '../../atoms/subtitle'
import './style.css'

/** Componente NoticeCell para el mensaje de carga fallida */
export default function NoticeCell () {
  return (
    <div className='notice-cell'>
      <Subtitle color='high'>Failed to Load Data</Subtitle>
    </div>
  )
}
