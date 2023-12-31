import {
  ImgCover,
  Role,
  DeviceImgToggler,
  GalleryImgToggler
} from '../../components/ProjectPages'

export default function ZigZagTattoo() {
  var project = 'zig-zag-tattoo'
  return (
    <>
      <ImgCover
        project={project}
        altText="pink, yellow, and light green zig zags on dark green background. pointing to intro text block for project page"
        imgType={'svg'}
      >
        <div className="row-f10">
          <Role
            freelance
            title={'zig zag tattoo'}
            columns={6}
            roles={'UI/UX, visual design & code, logo & brand design, project management'}
            contributors={'copy & photos: Zig Zag Tattoo.'}
          >
            <p>
              is a tattoo studio in Portland, OR. i built a website with one of the
              founders last year, so i was stoked they returned to work on a bigger
              project - a website & brand for the newly founded studio.
            </p>
          </Role>
        </div>
      </ImgCover>
      <div className="container">
        <DeviceImgToggler
          textCol={4}
          invert
          deviceCol={7}
          project={project}
          images={['home', 'artist', 'FAQ']}
          imgType={'webp'}
          arrows
        >
          <h2>building the website:</h2>
          <p>
            we needed a concise site that showcases artist's work and reduces admin work
            for artists with booking forms & Calendly scheduling.
          </p>
          <p>
            each artist operates as a one-person business, so reducing their workload
            outside of tattooing is essential.
          </p>
        </DeviceImgToggler>
      </div>
      <div className="container">
        <GalleryImgToggler
          textCol={4}
          invert
          galleryCol={7}
          project={project}
          imgType={'svg'}
          galleries={[
            {
              title: 'final marks',
              prefix: 'logo',
              images: ['cover', 'primary', 'wide', 'tall']
            },
            { title: 'sketches', prefix: 'process', images: ['1', '2', '3'] }
          ]}
        >
          <h2>form, function, name.</h2>
          <p>
            it always made sense what should drive the logo design: the words zig zag make
            the shape they describe...what's the word for a visual onomatopoeia?
          </p>
          <p>
            the mark made my clients really happy - the highly flexible, geometric design
            paying homage to a preferred tattooing style of the founders.
          </p>
        </GalleryImgToggler>
      </div>
    </>
  )
}
