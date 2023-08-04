import { ImgCover, Role, GalleryImgToggler } from '../../components/ProjectPages';

export default function LocalElectionGuides() {
  var project = 'local-election-guides';
  return (
    <>
      <ImgCover project={project} imgType={'webp'}>
        <div className="row-f10">
          <Role
            title={'change starts locally.'}
            columns={6}
            personal
            roles={'design, research'}
            contributors={'copy: based on local election guides, Votersedge.org'}
          >
            <p>
              ballot & campaign details aren't necessarily officially communicated in a
              way that's clear to someone who's not terminally invested in politics. it
              shouldn't be that way.
            </p>
          </Role>
        </div>
      </ImgCover>
      <div className="container">
        <GalleryImgToggler
          textCol={5}
          invert
          galleryCol={8}
          vh={50}
          project={project}
          imgType={'webp'}
          galleries={[
            {
              title: 'measures',
              prefix: 'measures',
              images: ['1', '2', '3'],
            },
            {
              title: 'candidates',
              prefix: 'candidates',
              images: ['1', '2', '3'],
            },
          ]}
        >
          <h2>insta...nt knowledge.</h2>
          <p>
            i started doing this around 2018 in order to help my immediate community &
            myself feel more informed in voting.
          </p>
          <p>
            slides were formatted to maximize readability on instagram while maintaining
            the core messages. it took massive amounts of editing to get each slide just
            right, and there's been hundreds of slides over the years.
          </p>
        </GalleryImgToggler>
      </div>
    </>
  );
}
