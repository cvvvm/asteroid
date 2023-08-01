import {
  ImgCover,
  Role,
  DeviceImgToggler,
  GalleryImgToggler,
} from '../../components/ProjectPages';

export default function SsuWebReskin() {
  var project = 'ssu-web-reskin';
  return (
    <>
      <ImgCover project={project} imgType={'webp'}>
        <div className="row-f10">
          <Role
            title={'new brand, fresh website'}
            columns={6}
            roles={'visual design lead, prototyping'}
            contributors={
              'brand assets: The Engine is Red, back-end: on-site developer, photos: university archive.'
            }
          >
            <p>
              for the launch of Sonoma State University's new brand, i partnered with the
              campus web team to give the website a fresh new look.
            </p>
          </Role>
        </div>
      </ImgCover>
      <div className="container">
        <DeviceImgToggler
          textCol={4}
          invert
          deviceCol={8}
          project={project}
          images={['hero', 'hub', 'department', 'nested']}
          imgType={'webp'}
          togglesDesc="final redesigned pages"
          arrows
        >
          <h2>spring semester cleaning:</h2>
          <p>
            i led the visual redesign - working with our dev + project management team to
            update every element, module, and style used across hundreds of webpages.
          </p>
        </DeviceImgToggler>

        <div className="row-f10">
          <div className="col-6 ps-stretch outline">
            <h2>tiny teams, tiny time.</h2>
            <p>
              due to resource limitations, changing functionality wasn't an option.
              collaborating closely was a necessity - balancing how the site needed to
              look while maintaining project scope.
            </p>
          </div>
          <div className="col-6 outline">
            <h2>new skin, same bones.</h2>
            <p>
              i built spec sheets for prioritized assets - detailing layouts per
              breakpoint, colors, font styles, and approximate sizing.
            </p>
            <p>
              we focused on updating preexisting Drupal modules. the refresh could roll
              out more seamlessly, as most pages wouldn't need many manual changes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
