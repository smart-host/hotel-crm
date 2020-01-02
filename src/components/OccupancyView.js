import React, { useState } from 'react';
import { Flex, Form } from '@gnerkus/ui-kit';
import FileInput from './FileInput';
import { optimizeOccupancy } from '../utility'

const initialGuestList = [
  23, 45, 155, 374, 22, 99, 100, 101, 115, 209
];

const threshold = 100

const OccupancyView = () => {
  const [guestList, onLoadGuestList] = useState(initialGuestList);
  const [premRoomCount, setPremRoomCount] = useState(3);
  const [econRoomCount, setEconRoomCount] = useState(3);

  const occupancy = optimizeOccupancy(
    guestList, threshold, premRoomCount, econRoomCount
  );

  const occupiedPremiumCount = occupancy.occupiedPremium.length;
  const occupiedPremiumValue = occupancy.occupiedPremium.reduce((acc, guest) => acc + guest, 0)
  const occupiedEconomyCount = occupancy.occupiedEconomy.length;
  const occupiedEconomyValue = occupancy.occupiedEconomy.reduce((acc, guest) => acc + guest, 0)

  return (
    <Flex.FlexGroup direction='column'>
      <Flex.FlexItem>
        <h3>Upload guest list</h3>
        <FileInput
          handleFileInput={onLoadGuestList}
        />
      </Flex.FlexItem>

      <Flex.FlexItem>
        <h2>Available Rooms</h2>
        <Flex.FlexGroup>
          <Flex.FlexItem>
            <p>Premium Rooms</p>
            <Form.NumberField
              defaultValue={premRoomCount}
              onChange={e => setPremRoomCount(e.target.value)}
              ref={React.createRef()}
            />
          </Flex.FlexItem>
          <Flex.FlexItem>
            <p>Economy Rooms</p>
            <Form.NumberField
              defaultValue={econRoomCount}
              onChange={e => setEconRoomCount(e.target.value)}
              ref={React.createRef()}
            />
          </Flex.FlexItem>
        </Flex.FlexGroup>
      </Flex.FlexItem>

      <Flex.FlexItem>
        <h2>Occupied Rooms</h2>
        <Flex.FlexGroup direction='column'>
          <Flex.FlexItem>
            <p>Occupied premium rooms: 
              <strong>{occupiedPremiumCount}</strong>
            </p>
            <p>Total premium room value: 
              <strong>{occupiedPremiumValue}</strong>
            </p>
          </Flex.FlexItem>
          <Flex.FlexItem>
            <p>Occupied economy rooms: 
              <strong>{occupiedEconomyCount}</strong>
            </p>
            <p>Total economy room value: 
              <strong>{occupiedEconomyValue}</strong>
            </p>
          </Flex.FlexItem>
        </Flex.FlexGroup>
      </Flex.FlexItem>
    </Flex.FlexGroup>
  )
}

export default OccupancyView
