import { Link } from 'react-router-dom'

function Footer({ project, vh = 20 }) {
  const currYear = new Date().getFullYear()

  if (project) {
    var projectReturn = (
      <div className={'row-f10 pb-3'}>
        <Link to={'/projects'}>
          <button className="button-outline">← return to work</button>
        </Link>
      </div>
    )
  }

  return (
    <div className={'container full py-6 pi-center vh-' + vh}>
      {projectReturn}
      <div className="row-f10 jc-evenly">
        <p style={{ textAlign: 'center' }} className="note">
          &copy;{currYear}.{' '}
          <Link className={'notelink'} to={'/docs'}>
            built
          </Link>{' '}
          by me :)
        </p>
        <a href="/about" className="plink mt-0">
          contact
        </a>
      </div>
    </div>
  )
}

export default Footer
