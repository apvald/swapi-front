import './style.css'

/** Interface para los props de Subtitle */
interface SubtitleProps extends React.PropsWithChildren {
  color?: 'low' | 'high' | 'light'
  className?: string
}

/**
 * Returns Subtitle // 'h2'
 *   
 * Componente para un subtítulo
 * @prop {string} color
 * @prop {React.ReactElement} children
 * @prop {string} className
*/
export default function Subtitle ( {color, children, className} : SubtitleProps) {
  return (
    <h2 className={ color+(className?' '+ className:'') }> {children} </h2>
  )
}
