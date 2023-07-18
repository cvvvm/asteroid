import Footer from '../components/Footer';

function About() {
  return (
    <>
      <div className="container vh-90 px-md-10">
        <div className="row-f10 jc-start">
          <div className="col-4">
            <p className="badge">about</p>
            <p>professional computer user living in the PNW.</p>
          </div>

          <div className="col-4">
            <p className="badge-outline">resources</p>
            <a
              className="plink"
              href="https://configure.zsa.io/moonlander/layouts/wGzJq/latest/0"
            >
              my moonlander keyboard layout
            </a>
          </div>
          <div className="row-f10 jc-start vh-40">
            <div className="col-8">
              <h3>contact me:</h3>
              <p>oops not yet.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
