import './style.css'

/** Interface para los props de Paragraph */
interface ParagraphProps extends React.PropsWithChildren {
  color?: 'low'
}

/**
 * Returns Paragraph // 'p'
 *   
 * Componente para un parrafo
 * @prop {string} color
 * @prop {React.ReactElement} children
*/
export default function Paragraph ( {color, children} : ParagraphProps) {
  return (
    <p
      className={ color }
      aria-label="p"
    >
        {children}
    </p>
  )
}
