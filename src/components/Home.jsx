import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
const Home = () => {
  const ref = useRef(null)
  useEffect(() => {
    const home = ref.current
    home.classList.add('visible')
  }, [])
  return (
    <div ref={ref} className='index home'>
      <p className='content'><em>ODAS NECIAS</em> es un proyecto poético sin más ínfulas que las que ya confiere versificar. Por la propia naturaleza de la obra, su contenido puede sufrir cambios con el devenir del tiempo. Sean pues bienvenidos a este necio triunfo de la sensibilidad, pues desde esta atalaya no nos importa tanto publicar como cantar, y en cualquier caso, ¿qué diferencia hay entre la librería, el cajón del escritorio o la vastedad de Internet? Yo les convido, pero el vermut lo ponen ustedes.</p>
      <h1 className='title bold'>PRÓLOGO</h1>
      <p className='content'>No querría ser feliz si ello me negara la posibilidad de conocer el llanto, amar la vida es cantar a todas sus formas. No ha habido más avaricia que la celebración, es por eso por lo que esta obrita siempre será susceptible de ser ampliada. Con respecto a la métrica, no he profesado querencia por ninguna forma determinada, que la herramienta escogida sea adecuada es responsabilidad del orfebre.</p>
      <p className='quote'>Agosto 2022, Madrid</p>
      <p className='quote'>A.M.A.</p>
      <div className='poem__nav'>
        <NavLink className='poem__nav--next bold' to='/odas-necias/indice'>Indice <span className='poem__nav--arrow right'><span className='shaft' /></span></NavLink>
      </div>
    </div>
  )
}

export default Home
