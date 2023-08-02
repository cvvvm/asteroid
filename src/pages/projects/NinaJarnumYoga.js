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
            roles={'visual design & code, project management'}
            freelance
            contributors={'website copy: Nina Jarnum Yoga'}
          >
            <p>
              Nina Jarnum Yoga uploaded themselves to the cloud for online instruction as
              covid-19 made it impossible to safely teach in-person.
            </p>
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
          <p>
            your laptop won't bend themselves backwards, but that's probably for the best.
          </p>
          <p>
            we transitioned the large, growing video archive to an online, member-based
            model with live classes.
          </p>
          <p>
            filtered galleries help members find the right archived video for their
            workout.
          </p>
        </DeviceImgToggler>
      </div>
    </>
  );
}
