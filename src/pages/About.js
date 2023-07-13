import Footer from '../components/Footer';

function About() {
  return (
    <>
      <div className="container vh-90 gap-10 jc-start">
        <div className="col-5">
          <p className="badge">about</p>
          <p>you read enough about me on the home page.</p>
        </div>

        <div className="col-5">
          <p className="badge">Shortcuts app</p>
          <p>might put links to shortcuts here. or might be too hard to share.</p>
        </div>

        <div className="col-5">
          <p className="badge-outline">resources</p>
          <a
            className="plink"
            href="https://configure.zsa.io/moonlander/layouts/wGzJq/latest/0"
          >
            my moonlander keyboard layout
          </a>
          <a
            className="notelink"
            href="https://configure.zsa.io/moonlander/layouts/wGzJq/latest/0"
          >
            my moonlander keyboard layout
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
