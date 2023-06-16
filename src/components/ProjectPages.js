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
      className={'container full-width vh-' + vh + ' pt-6 pt-md-3 ' + className}
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
        <div className="col-f10 pt-xs-1">
          <p className="badge">contributors:</p>
        </div>
        <p className="note">{contributors}</p>
      </>
    );
  }
  return (
    <div className={'outline invert mt-xs-5 mt-md-0 row-gap-xs-1 col-' + columns}>
      <div className="col-f10 pb-xs-3 row-gap-xs-1">
        <h2>{project}</h2>
        <p>{intro}</p>
      </div>
      <div className="row-f10 pc-start col-gap-xs-1">
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
  invert,
  vh = 80,
  deviceCol,
  project,
  images = [],
  children,
}) {
  // map display toggles
  //---------------------------------------------------------------------
  const [displayImg, setDisplayImg] = useState(images[0]);
  var toggleMap = images.map((page, index) => {
    return (
      <button
        key={page}
        className={
          'device-img-toggler-button button' + (displayImg === page ? '' : '-outline')
        }
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
          'order-xs-1 order-xl-0 outline col-' + textCol + (invert ? ' invert' : '')
        }
      >
        {children}
        <p className="note mt-xs-2 mb-xs-0">display page:</p>
        <div className="row-f10 pc-flex-start col-gap-xs-1">{toggleMap}</div>
      </div>
      <Devices columns={deviceCol} project={project} page={displayImg} imgtype={'svg'} />
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// GALLERY + DESCRIPTION TOGGLER
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
            '/images/projects/zig-zag-tattoo/' +
            galleries[activeGallery].title +
            '-' +
            image +
            imgType
          ).toLowerCase()}
        />
      </div>
    );
  });

  return (
    <div className={'gallery ps-center col-' + columns}>
      <button className="gallery-button button" onClick={lastSlide}>
        &#60;
      </button>
      {imgMap}
      <button className="gallery-button button" onClick={nextSlide}>
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
  invert,
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
          'device-img-toggler-button button' +
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
    <div className={'row-f10 vh-' + vh}>
      <div
        className={
          'order-xs-1 order-xl-0 outline col-' + textCol + (invert ? ' invert' : '')
        }
      >
        {children}
        <p className="note mt-xs-2 mb-xs-0">display gallery:</p>
        <div className="row-f10 pc-flex-start col-gap-xs-1"> {toggleMap} </div>
      </div>
      <ToggledGallery
        columns={7}
        imgType="svg"
        project="zig-zag-tattoo"
        activeGallery={activeGallery}
        galleries={galleries}
      />
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
      <button className="gallery-button button" onClick={lastSlide}>
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

      <button className="gallery-button button" onClick={nextSlide}>
        &#62;
      </button>
    </div>
  );
};
