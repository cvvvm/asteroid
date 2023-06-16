function Footer({ project }) {
  const currYear = new Date().getFullYear();

  if (project) {
    var projectReturn = (
      <div className="row-f10">
        <a href="/work">
          <button className="button">return to work</button>
        </a>
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
