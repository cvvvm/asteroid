import { ImgCover, Role, GalleryImgToggler } from '../../components/ProjectPages'

export default function VoltaRoach() {
  var project = 'volta-roach'
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
            roles={'illustration + coloring, art direction, project management'}
          >
            <p>
              the future is electric, and the people at Volta know it. they aim to be an
              un-killable high-tech force, battling it out with the dinosaurs of industry.
            </p>

            <p className="note">
              notes: any likeness to any currently existing entities is coincidence. Volta
              was acquired by Shell Corp in 2023.
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
              images: ['final']
            },
            {
              title: 'color',
              prefix: 'process',
              images: ['color']
            },
            {
              title: 'wire',
              prefix: 'process',
              images: ['wire']
            },
            {
              title: 'ink',
              prefix: 'process',
              images: ['ink']
            },
            {
              title: 'sketch',
              prefix: 'process',
              images: ['sketch']
            }
          ]}
        ></GalleryImgToggler>
      </div>
      <div className="container">
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
              images: ['1', '2', '3', '4', '5']
            }
          ]}
        >
          <h3>feedback highlights:</h3>
          <p className="mt-0">“more megatron, less bumblebee“</p>
          <p>“the cockroach should look…a lot buffer”</p>
        </GalleryImgToggler>
      </div>
    </>
  )
}
