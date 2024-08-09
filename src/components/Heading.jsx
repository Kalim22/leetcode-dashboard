import React from 'react'

const Heading = ({headingIcon, heading, optionalIcon = null}) => {
  return (
    <div className='heading__container' style={{justifyContent: optionalIcon ? 'space-between' : 'flex-start'}}>
      <div className='flex items-center justify-center gap-1'>
        {headingIcon}
        <p className='text-2xl font-semibold'>{heading}</p>
      </div>
        {optionalIcon}
    </div>
  )
}

export default Heading
