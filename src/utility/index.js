export const categorizeGuests = (guestList, threshold) => {
  const sortedGuestList = guestList.sort((a, b) => b - a)
  const premiumGuests = sortedGuestList.filter(guest => guest > threshold)
  const economyGuests = sortedGuestList.filter(guest => guest <= threshold)

  return {
    premiumGuests,
    economyGuests
  };
}

export const occupyRooms = (guestList, roomCount) => {
  return guestList.slice(0, roomCount)
}

export const fillPremium = (
  premRoomCount,
  premGuestCount,
  economyGuests,
  occupiedPremium
) => {
  const unoccupiedPremCount = premRoomCount - premGuestCount;
  if (unoccupiedPremCount > 0) {
    const economyToPrem = economyGuests.slice(0, unoccupiedPremCount)
    occupiedPremium = [...occupiedPremium, ...economyToPrem]
    economyGuests = economyGuests.slice(unoccupiedPremCount)
  }

  return {
    occupiedPremium,
    economyGuests
  };
}