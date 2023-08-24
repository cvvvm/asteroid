import { ImgCover, Role, GalleryImgToggler } from '../../components/ProjectPages'

export default function LoboRedesign() {
  var project = 'lobo-redesign'
  return (
    <>
      <ImgCover project={project} imgType={'webp'}>
        <div className="row-f10">
          <Role title={"what's a seawolf?"} columns={6} roles={'illustrator'}>
            <p>
              Lobo's a seawolf, of course. As the Sonoma State University mascot, they're
              one of the first impressions students get of the university.
            </p>
            <p>
              But, Lobo didn't have a consistent appearance...and in some areas, no
              appearance at all.
            </p>
            <p>
              Lobo needed to be refreshed to be be more easily posed & shared, appearing
              readable at varied sizes across print & digital media.
            </p>
          </Role>
        </div>
      </ImgCover>
      <div className="container">
        <GalleryImgToggler
          textCol={4}
          invert
          galleryCol={8}
          vh={50}
          project={project}
          imgType={'webp'}
          galleries={[
            {
              title: 'full body',
              prefix: 'body',
              images: ['1', '2', '3', '4']
            },
            {
              title: 'heads',
              prefix: 'heads',
              images: ['1', '2']
            },
            {
              title: 'sketches',
              prefix: 'sketches',
              images: ['1', '2', '3']
            }
          ]}
        >
          <h2>see wolf, be wolf.</h2>
          <p>
            After dozens of potential candidates, I landed on the design that would serve
            as the new university mascot.
          </p>
          <p>
            In their new skin, I used Lobo for everything from AR filters, GIPHY assets,
            and static illustrations.
          </p>
        </GalleryImgToggler>
      </div>
    </>
  )
}
