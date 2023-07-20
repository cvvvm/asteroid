import { Devices } from '../components/MockupDevices';
import { useState, useRef, useLayoutEffect } from 'react';

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// IMG COVER
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export function ImgCover({ project, imgType, vh = 100, children, className }) {
  return (
    <div
      className={'container full vh-' + vh + ' px-1 py-1 py-md-6 ' + className}
      style={{
        backgroundImage: 'url(/images/projects/' + project + '/cover.' + imgType + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {children}
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// ROLE CARD
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export function Role({ columns, project, intro, freelance, roles, contributors }) {
  if (freelance) {
    var freelanceBadge = <p className="badge-outline">freelance</p>;
  }

  if (contributors) {
    var contributes = (
      <>
        <div className="col-f10 pt-1">
          <p className="badge">contributors:</p>
        </div>
        <p className="note">{contributors}</p>
      </>
    );
  }
  return (
    <div className={'outline invert mt-5 mt-md-0 row-gap-1 col-' + columns}>
      <div className="col-f10 pb-3">
        <h1>{project}</h1>
        <p>{intro}</p>
      </div>
      <div className="row-f10 pc-start col-gap-1">
        <p className="badge">my role:</p>
        {freelanceBadge}
      </div>
      <p className="note">{roles}</p>
      {contributes}
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// DEVICE + DESCRIPTION TOGGLER
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export function DeviceImgToggler({
  textCol,
  textColOrder = 0,
  invert,
  vh = 80,
  deviceCol,
  project,
  images = [],
  children,
  imgType,
  toggleCaption = 'display page',
}) {
  // map display toggles
  //---------------------------------------------------------------------
  const [displayImg, setDisplayImg] = useState(images[0]);
  var toggleMap = images.map((page, index) => {
    return (
      <button
        key={page}
        className={'device-page-toggle button' + (displayImg === page ? '' : '-outline')}
        onClick={() => setDisplayImg(images[index])}
        ref={() => index}
      >
        {page.replace(/-/g, ' ')}
      </button>
    );
  });

  // render component
  //---------------------------------------------------------------------
  return (
    <div className={'row-f10 vh-' + vh}>
      <div
        className={
          'order-' + textColOrder + ' outline col-' + textCol + (invert ? ' invert' : '')
        }
      >
        {children}
        <div className="row-f10 jc-start gap-1">
          <p className="note mt-1 mb-0">{toggleCaption + ':'}</p>
          <div
            className="page-toggles-container row-f10 pc-start"
            style={{ marginLeft: '-.25rem' }}
          >
            {toggleMap}
          </div>
        </div>
      </div>
      <Devices
        columns={deviceCol}
        project={project}
        page={displayImg}
        imgType={imgType}
      />
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// IMAGE GALLERY + DESCRIPTION TOGGLER
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// TOGGLED GALLERY
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const ToggledGallery = ({
  columns,
  project = '',
  imgType = '',
  activeGallery,
  galleries,
}) => {
  const [currentImg, setCurrentImg] = useState(0);
  const length = galleries[activeGallery].images.length;

  if (imgType) {
    imgType = '.' + imgType;
  }

  const nextSlide = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
  };

  const lastSlide = () => {
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
  };

  // map active gallery
  //---------------------------------------------------------------------
  //src={'/images/projects/' + project + '/' + displayGallery + '-' + galleries[0].images[0] + '.png'
  var imgMap = galleries[activeGallery].images.map((image, index) => {
    return (
      <div className={index === currentImg ? 'slide active' : 'slide'} key={index}>
        <img
          src={(
            '/images/projects/' +
            project +
            '/' +
            galleries[activeGallery].prefix +
            '-' +
            image +
            imgType
          ).toLowerCase()}
        />
      </div>
    );
  });

  return (
    <div className={'gallery ps-center col-f10 ' + columns}>
      <button className="gallery-button button-outline" onClick={lastSlide}>
        &#60;
      </button>
      {imgMap}
      <button className="gallery-button button-outline" onClick={nextSlide}>
        &#62;
      </button>
    </div>
  );
};

// COMPONENT
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export function GalleryImgToggler({
  textCol,
  textColOrder = 0,
  invert,
  outline,
  vh = 80,
  galleryCol,
  project,
  imgType,
  galleries = [{ title: '', images: [] }],
  children,
}) {
  // states
  //---------------------------------------------------------------------
  const [activeGallery, setActiveGallery] = useState(0);

  // map display toggles
  //---------------------------------------------------------------------

  var toggleMap = galleries.map((gallery, index) => {
    return (
      <button
        key={index}
        className={
          'device-page-toggle button' +
          (galleries[activeGallery].title === gallery.title ? '' : '-outline')
        }
        onClick={() => setActiveGallery(index)}
        ref={() => gallery.title}
      >
        {gallery.title.replace(/-/g, ' ')}
      </button>
    );
  });

  // render component
  //---------------------------------------------------------------------
  return (
    <div className={' row-f10 vh-' + vh}>
      <div
        className={
          'pc-center mb-lg-4 order-1 order-xl-' +
          textColOrder +
          '  col-' +
          textCol +
          (outline ? ' outline' : '') +
          (invert ? ' outline invert' : '')
        }
      >
        {children}
      </div>
      <div className={'row-gap-2 row-' + galleryCol}>
        <ToggledGallery
          imgType={imgType}
          project={project}
          activeGallery={activeGallery}
          galleries={galleries}
        />
        <div className="row-f10 pc-center page-toggles-container">
          <p className="note ps-center">view:</p>
          {toggleMap}
        </div>
      </div>
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// IMAGE GALLERY
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// HOW TO USE
/* <Gallery
  slides={[
    {
      image: 'img-test-sq.jpg',
      alt: 'square!',
    },
  ]}
/>; */

export const Gallery = ({ columns, imgType = '', project = '', images }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
  };

  const lastSlide = () => {
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
  };

  return (
    <div className={'gallery ps-center col-' + columns}>
      <button className="gallery-button button-outline" onClick={lastSlide}>
        &#60;
      </button>

      {images.map((slide, index) => {
        return (
          <div className={index === currentImg ? 'slide active' : 'slide'} key={index}>
            <img
              src={
                '/images/' + project + '/' + slide.image + imgType
              } /* alt={slide.alt} */
            />
          </div>
        );
      })}

      <button className="gallery-button button-outline" onClick={nextSlide}>
        &#62;
      </button>
    </div>
  );
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// VIDEO GALLERY
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const VideoGallery = ({
  columns,
  project = '',
  videoType = '',
  activeGallery = 0,
  galleries,
}) => {
  const [currentImg, setCurrentImg] = useState(0);
  const length = galleries[activeGallery].images.length;

  if (videoType) {
    videoType = '.' + videoType;
  }

  const nextSlide = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
  };

  const lastSlide = () => {
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
  };

  // map active gallery
  //---------------------------------------------------------------------
  //src={'/images/projects/' + project + '/' + displayGallery + '-' + galleries[0].images[0] + '.png'
  var imgMap = galleries[activeGallery].images.map((image, index) => {
    return (
      <div
        className={
          'col-' + columns + ' ' + (index === currentImg ? 'slide active' : 'slide')
        }
        key={index}
      >
        <video muted controls playsInline>
          <source
            src={(
              '/images/projects/' +
              project +
              '/' +
              galleries[activeGallery].prefix +
              '-' +
              image +
              videoType
            ).toLowerCase()}
          />
        </video>
      </div>
    );
  });

  // slide counter
  //---------------------------------------------------------------------
  var slideCounter = (
    <p className="note">
      {currentImg + 1} / {galleries[activeGallery].images.length}
    </p>
  );

  return (
    <div className={'row-gap-1 row-' + columns}>
      <div className="gallery">
        <button className="gallery-button button-outline" onClick={lastSlide}>
          &#60;
        </button>
        {imgMap}
        <button className="gallery-button button-outline" onClick={nextSlide}>
          &#62;
        </button>
      </div>
      <div className={'row-' + columns}>{slideCounter}</div>
    </div>
  );
};
