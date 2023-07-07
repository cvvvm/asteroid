import { Link } from 'react-router-dom';

function Footer({ project }) {
  const currYear = new Date().getFullYear();

  if (project) {
    var projectReturn = (
      <div className="row-f10">
        <Link to={'/work'}>
          <button className="button">return to work</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container pi-center">
      {projectReturn}
      <div className="row-f10">
        <p className="note">&copy;{currYear}. built by me with react & scss :)</p>
      </div>
    </div>
  );
}

export default Footer;
