import React from 'react'

type Props = {
    children: string
}

function Title({children}: Props) {
  return (
    <div className='text-h2 font-bold text-white'>
        {children}
    </div>
  )
}

export default Title