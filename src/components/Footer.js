import { Link } from 'react-router-dom';

function Footer({ project, vh = 20, padding = 5 }) {
  const currYear = new Date().getFullYear();

  if (project) {
    var projectReturn = (
      <div className={'row-f10 py-' + padding}>
        <Link to={'/work'}>
          <button className="button">return to work</button>
        </Link>
      </div>
    );
  }

  return (
    <div className={'container full py-' + padding + ' pi-center vh-' + vh}>
      {projectReturn}
      <div className="row-f10">
        <p style={{ textAlign: 'center' }} className="note">
          &copy;{currYear}.{' '}
          <Link className={'notelink'} to={'/documentation'}>
            built
          </Link>{' '}
          by me :)
        </p>
      </div>
    </div>
  );
}

export default Footer;
