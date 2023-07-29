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
            title={'big, robot bug.'}
            columns={6}
            roles={'illustration + coloring, art direction.'}
          >
            <p>
              the future is electric, and the people at Volta know it. according to the
              brief they're an un-killable high-tech force, battling it out against the
              ancient dinosaurs of industry.
            </p>
            <p>
              drawing robot battles keep my inner child happy, so i gleefully accepted
              this job.
            </p>
            <p className="note">
              notes: any likeness to any currently existing entities is merely
              coincidental. Volta has been acquired by Shell Corp as of 2023.
            </p>
          </Role>
        </div>
      </ImgCover>
      <div className="container">
        <GalleryImgToggler
          textCol={4}
          textColOrder={1}
          invert
          galleryCol={12}
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
        ></GalleryImgToggler>

        <div className="row-f8 vh-30 col-gap-1 outline">
          <div className="col-f2 jc-center">
            <h3>feedback highlights:</h3>
          </div>
          <div className="col-f4 jc-center">
            <p>“more megatron, less bumblebee“</p>
            <p>“the cockroach should look…a lot buffer”</p>
          </div>
        </div>

        <GalleryImgToggler
          textCol={5}
          textColOrder={1}
          outline
          galleryCol={7}
          vh={60}
          project={project}
          imgType={'webp'}
          galleries={[
            {
              title: 'detail',
              prefix: 'detail',
              images: ['1', '2', '3', '4', '5'],
            },
          ]}
        >
          <h3>color bind.</h3>
          <p>
            the illustration needed to be printed as large wall art. to keep things clean
            colors are all vector. the high-res inks scale well, and are eventually
            converted to vector for the largest scales. it was a fun challenge getting the
            details right.
          </p>
          <p>
            you don't get called a clients "favorite artist" because they're unhappy with
            the work.
          </p>
        </GalleryImgToggler>
      </div>
    </>
  );
}
