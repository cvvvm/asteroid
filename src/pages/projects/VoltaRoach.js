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
      <ImgCover
        project={project}
        altText={
          'crop of illustration showing close-up view of gas station exploding. bright yellow and red coloring with black ink drawing.'
        }
        imgType={'webp'}
      >
        <div className="row-f10">
          <Role
            freelance
            project={'big, robot bug.'}
            columns={6}
            roles={'illustration + coloring, art direction.'}
          >
            <p>
              the future is electric, and the people at Volta know it. according to the
              brief they're an un-killable high-tech force, battling it out against the
              ancient dinosaurs of industry.
            </p>
            <p className="note">
              note: any likeness to any currently existing entities is merely
              coincidental. Volta has been acquired by Shell Corp as of 2023.
            </p>
          </Role>
        </div>
      </ImgCover>
      <div className="container">
        <GalleryImgToggler
          textCol={5}
          textColOrder={1}
          invert
          galleryCol={9}
          vh={50}
          project={project}
          imgType={'webp'}
          galleries={[
            {
              title: 'final',
              prefix: 'process',
              images: ['final'],
            },
            {
              title: 'color',
              prefix: 'process',
              images: ['color'],
            },
            {
              title: 'wire',
              prefix: 'process',
              images: ['wire'],
            },
            {
              title: 'ink',
              prefix: 'process',
              images: ['ink'],
            },
            {
              title: 'sketch',
              prefix: 'process',
              images: ['sketch'],
            },
          ]}
        >
          <h2>battery charges</h2>
          <p>great pun.</p>
        </GalleryImgToggler>
        <GalleryImgToggler
          textCol={5}
          textColOrder={1}
          invert
          galleryCol={6}
          vh={50}
          project={project}
          imgType={'webp'}
          galleries={[
            {
              title: 'detail',
              prefix: 'detail',
              images: ['1', '2', '3', '4', '5'],
            },
          ]}
        ></GalleryImgToggler>
      </div>
    </>
  );
}
