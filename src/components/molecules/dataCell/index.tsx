import Subtitle from '../../atoms/subtitle'
import './style.css'

/** Interface para los props del componente del DataCell */
interface DataCellProps {
  nombre: string
  desc?: string
}

/**
 * Returns DataCell
 *   
 * Componente para un Celda con información
 * @prop {string} nombre
 * @prop {string} desc
*/
export default function DataCell ({ nombre, desc }: DataCellProps) {
  return (
    <div className='data-cell'>
      <div className='data-cell--wrapper'>
        <Subtitle color='low'>{nombre}</Subtitle>
        <Subtitle>{desc}</Subtitle>
      </div>
    </div>
  )
}
