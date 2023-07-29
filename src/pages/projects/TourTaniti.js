import {
  ImgCover,
  Role,
  DeviceImgToggler,
  GalleryImgToggler,
} from '../../components/ProjectPages';

export default function TourTaniti() {
  var project = 'tour-taniti';
  return (
    <>
      <ImgCover project={project} imgType={'webp'}>
        <div className="row-f10">
          <Role
            project={"so idyllic, it doesn't exist"}
            columns={6}
            roles={'visual design, prototyping, interactions'}
            contributors={"copy: provided by Western Governor's University"}
          >
            <p>nice</p>
          </Role>
        </div>
      </ImgCover>
      <div className="container"></div>
    </>
  );
}
