import Subtitle from '../../atoms/subtitle'
import './style.css'

/**
 * Returns SectionHeader
 *   
 * Componente para un Título en la sección de información
 * @prop {React.ReactElement} children
*/
export default function SectionHeader ({ children }: React.PropsWithChildren) {
  return (
    <div className='section-header'>
      <Subtitle>{children}</Subtitle>
    </div>
  )
}
