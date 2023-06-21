import {
  ImgCover,
  Role,
  DeviceImgToggler,
  GalleryImgToggler,
} from '../../components/ProjectPages';

function ZigZagTattoo() {
  var project = 'zig-zag-tattoo';
  return (
    <>
      <ImgCover project={project} imgType={'svg'}>
        <div className="row-f10">
          <Role
            freelance
            project={'Zig Zag Tattoo'}
            intro={
              'is a new tattoo studio in Portland, OR. I built a website with one of the founders last year, so I was stoked they returned to work on a bigger project - a website & brand for the studio.'
            }
            columns={7}
            roles={
              'UI/UX, visual design, front-end code, wireframes, scheduling software integration, & project management.'
            }
            contributors={'Zig Zag Tattoo provided copy & photos.'}
          />
        </div>
      </ImgCover>
      <div className="container">
        <DeviceImgToggler
          textCol={6}
          invert
          deviceCol={7}
          project={project}
          images={['Home', 'Artist', 'FAQ']}
        >
          <h2>Building the Website:</h2>
          <p>
            We needed a concise site that showcases artist's work and reduces admin work
            for artists with booking forms & Calendly scheduling.
          </p>
          <p>
            Each artist operates as a one-person business, so reducing their workload
            outside of tattooing is essential.
          </p>
        </DeviceImgToggler>
        <GalleryImgToggler
          textCol={6}
          galleryCol={7}
          project={project}
          imgType={'svg'}
          galleries={[
            {
              title: 'final marks',
              prefix: 'logo',
              images: ['cover', 'primary', 'wide', 'tall'],
            },
            { title: 'sketches', prefix: 'process', images: ['1', '2', '3'] },
          ]}
        >
          <h2>form, function... and name.</h2>
          <p>
            It always made sense what should drive the logo design: the words zig zag make
            the shape they describe...What's the word for a visual onomatopoeia?
          </p>
          <p>
            The mark made my clients really happy - the highly flexible, geometric design
            paying homage to a preferred tattooing style of the founders.
          </p>
        </GalleryImgToggler>
      </div>
    </>
  );
}
export default ZigZagTattoo;
