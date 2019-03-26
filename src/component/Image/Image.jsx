import React from 'react'

const Image = ({ImageSrc}) => {
  return (
    ImageSrc &&
      <div className="image">
        <img  src={require(`../../images/${ImageSrc}.jpg`)} alt={`from ${ImageSrc}`} />
      </div>
  )
}
export default Image