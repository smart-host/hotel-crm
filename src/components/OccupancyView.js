import React, { useState } from 'react';
import FileInput from './FileInput'

const OccupancyView = () => {
  const [guestList, onLoadGuestList] = useState([])

  return (
    <div>
      <FileInput
        handleFileInput={onLoadGuestList}
      />
    </div>
  )
}

export default OccupancyView
