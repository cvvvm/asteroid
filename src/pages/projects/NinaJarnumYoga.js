import { Children, useState } from 'react';
import {
  ImgCover,
  Role,
  DeviceImgToggler,
  GalleryImgToggler,
} from '../../components/ProjectPages';

export default function NinaJarnumYoga() {
  var project = 'nina-jarnum-yoga';
  return (
    <>
      <ImgCover project={project} imgType={'webp'}>
        <div className="row-f10">
          <Role
            title={'flexible under pressure.'}
            columns={6}
            roles={'visual design, CSS styles, project management'}
            freelance
            contributors={'website copy: provided by Nina Jarnum Yoga'}
          >
            <p>when there's a pandemic you gotta not die. but also make money</p>
          </Role>
        </div>
      </ImgCover>
      <div className="container">
        <DeviceImgToggler
          deviceCol={7}
          textCol={5}
          project={project}
          imgType={'webp'}
          images={['home', 'classes', 'member', 'about']}
        >
          <h3>staying flexible.</h3>
          <p>when the world is falling apart you gotta sell stuff :/</p>
        </DeviceImgToggler>
      </div>
    </>
  );
}
