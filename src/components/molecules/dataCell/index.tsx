import Subtitle from '../../atoms/subtitle'
import './style.css'

interface DataCellProps {
  nombre: string
  desc?: string
}

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
