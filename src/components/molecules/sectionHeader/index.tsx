import Subtitle from '../../atoms/subtitle'
import './style.css'

export default function SectionHeader ({ children }: React.PropsWithChildren) {
  return (
    <div className='section-header'>
      <Subtitle>{children}</Subtitle>
    </div>
  )
}
