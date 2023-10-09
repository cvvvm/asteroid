import { Devices } from '../components/MockupDevices'
import { useState, useRef, useEffect } from 'react'

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// IMG COVER
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export function ImgCover({ project, altText, imgType, vh = 100, children, className }) {
  return (
    <div>
      <span
        className={'container full w-100 vh-' + vh + ' px-1 py-1 py-md-6 ' + className}
        style={{
          backgroundImage: 'url(/images/projects/' + project + '/cover.' + imgType + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        title={altText}
        role="img"
      >
        {children}
      </span>
    </div>
  )
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// ROLE CARD
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export function Role({
  columns,
  title,
  freelance,
  personal,
  roles,
  contributors,
  children
}) {
  if (freelance) {
    var freelanceBadge = <p className="badge-outline">freelance</p>
  }
  if (personal) {
    var personalBadge = <p className="badge-outline">personal</p>
  }

  if (contributors) {
    var contributes = (
      <>
        <div className="col-f10 pt-1" style={{ marginBottom: '-0.625rem' }}>
          <p className="badge">contributors:</p>
        </div>
        <p className="note">{contributors}</p>
      </>
    )
  }

  return (
    <div className={'outline invert mt-4 mt-md-0 row-gap-1 col-' + columns}>
      <div className="col-f10 pb-1 pb-md-2">
        <h1>{title}</h1>
        {children}
      </div>
      <div className="row-f10 pc-start col-gap-1" style={{ marginBottom: '-0.5rem' }}>
        <p className="badge">my role:</p>
        {freelanceBadge}
        {personalBadge}
      </div>
      <p className="note">{roles}</p>
      {contributes}
    </div>
  )
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// DEVICE + DESCRIPTION TOGGLER
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export function DeviceImgToggler({
  textCol,
  textColOrder = 1,
  invert,
  vh = 50,
  deviceCol,
  project,
  images = [],
  children,
  imgType,
  togglesDesc = 'display page',
  toggles,
  arrows = true
}) {
  // map display toggles
  //-----------------------------------------------------------
  const [imgIndex, setImgIndex] = useState(0)
  const [imgName, setImgName] = useState(images[imgIndex])

  const logging = () => {
    console.log('image: ' + imgName + ' index: ' + imgIndex)
  }

  // if toggles
  //-----------------------------------------------------------
  if (toggles) {
    // toggles title map
    var toggleMap = images.map((page, index) => {
      return (
        <button
          key={page}
          className={'device-page-toggle button' + (imgName === page ? '' : '-outline')}
          onClick={() => {
            setImgIndex(index)
            setImgName(images[index])
            logging()
          }}
          ref={() => index}
        >
          {page.replace(/-/g, ' ')}
        </button>
      )
    })
    // toggles row block
    var toggleBlock = (
      <div className="row-f10 jc-start gap-1">
        <p className="note mb-0">{togglesDesc + ':'}</p>
        <div
          className="page-toggles-container row-f10 pc-start"
          style={{ marginLeft: '-.25rem' }}
        >
          {toggleMap}
        </div>
      </div>
    )
  }

  // page count arrows
  //-----------------------------------------------------------
  const screensCount = images.length - 1
  const lastCalc = imgIndex === 0 ? screensCount : imgIndex - 1
  const nextCalc = imgIndex === screensCount ? 0 : imgIndex + 1

  // slide counter
  var slideCounter = (
    <p className="note">
      {imgIndex + 1} / {images.length}
    </p>
  )

  // if arrows
  if (arrows) {
    var arrows = (
      <div
        className={'row-f10 pc-evenly ai-center'}
        /*         style={{
          columnGap: '200px',
          marginTop: '-2.375rem',
          marginLeft: '-1rem',
          marginRight: '-1rem',
        }} */
      >
        <button
          className="button gallery-button"
          onClick={() => {
            setImgIndex(lastCalc)
            setImgName(images[lastCalc])
            logging()
          }}
        >
          ←
        </button>
        {slideCounter}
        <button
          className="button gallery-button"
          onClick={() => {
            setImgIndex(nextCalc)
            setImgName(images[nextCalc])
            logging()
          }}
        >
          →
        </button>
      </div>
    )
  }

  // render component
  //-----------------------------------------------------------
  return (
    <div className={'row-f10 pb-3 pb-sm-2 pb-md-1 vh-' + vh}>
      <div
        className={
          'order-' + textColOrder + ' outline col-' + textCol + (invert ? ' invert' : '')
        }
      >
        {children}

        {toggleBlock}
      </div>
      <Devices columns={deviceCol} project={project} page={imgName} imgType={imgType}>
        {arrows}
      </Devices>
    </div>
  )
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// IMAGE GALLERY + DESCRIPTION TOGGLER
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// TOGGLED GALLERY
//------------------------------------------------------------------------------------
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const ToggledGallery = ({
  columns,
  project = '',
  imgType = '',
  activeGallery,
  galleries,
  children
}) => {
  const [currentImg, setCurrentImg] = useState(0)
  const length = galleries[activeGallery].images.length - 1

  if (imgType) {
    imgType = '.' + imgType
  }

  const lastSlide = () => {
    setCurrentImg(currentImg === 0 ? length : currentImg - 1)
  }
  const nextSlide = () => {
    setCurrentImg(currentImg === length ? 0 : currentImg + 1)
  }

  if (currentImg > length) {
    setCurrentImg(length)
  }

  // map active gallery
  //-----------------------------------------------------------
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
    )
  })

  // hide/show buttons, counter
  //-----------------------------------------------------------
  var lastButton = ''
  var nextButton = ''

  // if multiple images
  if (galleries[activeGallery].images.length > 1) {
    lastButton = (
      <button className="gallery-button button" onClick={lastSlide}>
        ←
      </button>
    )
    nextButton = (
      <button className="gallery-button button" onClick={nextSlide}>
        →
      </button>
    )
    var slideCounter = (
      <p className="note">
        {currentImg + 1} / {galleries[activeGallery].images.length}
      </p>
    )
    var arrows = (
      <div className="row-f10 mb-1 ai-center pc-evenly">
        {lastButton}
        {slideCounter}
        {nextButton}
      </div>
    )
  }

  return (
    <>
      <div className={'gallery ps-center col-f10 ' + columns}>{imgMap}</div>
      {arrows}

      {children ? <div className="row-f10 ai-center">{children}</div> : ''}
    </>
  )
}

// COMPONENT
//------------------------------------------------------------------------------------
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export function GalleryImgToggler({
  textCol,
  textColOrder = 1,
  invert,
  outline,
  vh = 50,
  galleryCol,
  project,
  imgType,
  galleries = [{ title: '', images: [] }],
  children
}) {
  // states
  //-----------------------------------------------------------
  const [activeGallery, setActiveGallery] = useState(0)

  // map display toggles
  //-----------------------------------------------------------

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
    )
  })

  // if children exist
  //-----------------------------------------------------------
  if (children) {
    children = (
      <div
        className={
          'pc-center mb-lg-4 order-' +
          textColOrder +
          '  col-' +
          textCol +
          (outline ? ' outline' : '') +
          (invert ? ' invert' : '')
        }
      >
        {children}
      </div>
    )
  }

  // hide/show toggles in text col
  //-----------------------------------------------------------
  if (galleries.length > 1) {
    var toggles = (
      <div className="row-f10 pc-center page-toggles-container">
        <p className="note ps-center">toggle:</p>
        {toggleMap}
      </div>
    )
  }

  // render component
  //-----------------------------------------------------------
  return (
    <div className={' row-f10 vh-' + vh}>
      {children}
      <div className={'row-gap-1 row-' + galleryCol}>
        <ToggledGallery
          imgType={imgType}
          project={project}
          activeGallery={activeGallery}
          galleries={galleries}
        >
          {toggles}
        </ToggledGallery>
      </div>
    </div>
  )
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// IMAGE GALLERY
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
  const [currentImg, setCurrentImg] = useState(0)
  const length = images.length

  const nextSlide = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1)
  }

  const lastSlide = () => {
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1)
  }

  return (
    <div className={'gallery ps-center col-' + columns}>
      <button className="gallery-button button" onClick={lastSlide}>
        ←
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
        )
      })}

      <button className="gallery-button button" onClick={nextSlide}>
        →
      </button>
    </div>
  )
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// VIDEO GALLERY
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const VideoGallery = ({
  columns,
  project = '',
  videoType = '',
  activeGallery = 0,
  galleries
}) => {
  const [currentImg, setCurrentImg] = useState(0)
  const length = galleries[activeGallery].images.length

  if (videoType) {
    videoType = '.' + videoType
  }

  const nextSlide = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1)
  }

  const lastSlide = () => {
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1)
  }

  // map active gallery
  //-----------------------------------------------------------
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
    )
  })

  // slide counter
  //-----------------------------------------------------------
  var slideCounter = (
    <p className="note">
      {currentImg + 1} / {galleries[activeGallery].images.length}
    </p>
  )

  return (
    <div className={'row-gap-1 row-' + columns}>
      <div className="gallery">{imgMap}</div>
      <div className="row-f10 mb-1 pc-evenly ai-center">
        <button className="gallery-button button" onClick={lastSlide}>
          ←
        </button>
        {slideCounter}
        <button className="gallery-button button" onClick={nextSlide}>
          →
        </button>
      </div>
    </div>
  )
}
