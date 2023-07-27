import {
  ImgCover,
  Role,
  DeviceImgToggler,
  GalleryImgToggler,
  VideoGallery,
} from '../../components/ProjectPages';

export default function VoltaRoach() {
  var project = 'volta-roach';
  return (
    <>
      <ImgCover project={project} imgType={'webp'}>
        <div className="row-f10">
          <Role
            freelance
            project={'big, robot bug.'}
            intro={'big bug intro text :)'}
            columns={6}
            roles={'illustration + coloring, art direction.'}
          />
        </div>
      </ImgCover>
      <div className="container">
        <GalleryImgToggler
          textCol={5}
          textColOrder={1}
          invert
          galleryCol={10}
          vh={50}
          project={project}
          imgType={'webp'}
          galleries={[
            {
              title: 'process',
              prefix: 'process',
              images: ['final', 'color', 'wire', 'ink', 'sketch'],
            },
            {
              title: 'details',
              prefix: 'detail',
              images: ['1', '2', '3', '4', '5'],
            },
          ]}
        >
          <h2>battery charges</h2>
          <p>great pun.</p>
        </GalleryImgToggler>
      </div>
    </>
  );
}
