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
            project={'new brand, fresh website'}
            intro={
              'you can’t rebrand without a website to match. since Sonoma State University got their new brand (developed by The Engine is Red), i used the shiny new brand toolkit to give the site a fresh look.'
            }
            columns={6}
            roles={
              'visual design lead, pixel measurer, mock-up presenter, site auditer, zoom talker'
            }
            contributors={
              'logo + assets: The Engine is Red, back-end: on-site developer, photos: university archive.'
            }
          />
        </div>
      </ImgCover>
      <div className="container">
        <DeviceImgToggler
          textCol={6}
          textColOrder={0}
          invert
          deviceCol={8}
          project={project}
          images={['hero', 'hub', 'department', 'nested']}
          imgType={'webp'}
          toggleCaption="final redesigned pages"
        >
          <h2>spring semester cleaning:</h2>
          <p>
            i led the visual redesign while working with our dev + project management team
            to update every single element, module, or style that appears across the
            hundreds of webpages.
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
          <div className="col-6 invert">
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
