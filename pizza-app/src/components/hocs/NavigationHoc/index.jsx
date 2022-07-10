import React from 'react'
import Navigation from '../../Navigation';

const NavigationHoc = ({children}) => {
  return (
    <div><Navigation/>
    {children}
    </div>
  )
}

export default NavigationHoc;