import Footer from '../components/Footer';

function About() {
  return (
    <>
      <div className="container vh-90 gap-10">
        <div className="col-5">
          <p className="badge">about</p>
          <p>you read enough about me on the home page.</p>
        </div>
        <div className="col-5">
          <p className="badge">resources</p>

          <a
            className="plink"
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
