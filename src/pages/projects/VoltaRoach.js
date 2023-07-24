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
        <div className="row-f10 vh-80">
          <div className="col-8 outline invert ">
            <h2>battery charges.</h2>
            <p>ha ha ha.</p>
          </div>
        </div>
        <GalleryImgToggler
          textCol={4}
          invert
          textColOrder={1}
          galleryCol={8}
          vh={50}
          project={project}
          imgType={'webp'}
          galleries={[
            {
              title: 'final',
              prefix: 'process',
              images: ['final', 'wire', 'ink', 'sketch'],
            },
            {
              title: 'detail',
              prefix: 'detail',
              images: ['1', '2', '3', '4'],
            },
          ]}
        >
          <h3>bug bug bug:</h3>
          <p>hi bug</p>
        </GalleryImgToggler>
      </div>
    </>
  );
}
