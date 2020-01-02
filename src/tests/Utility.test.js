import { categorizeGuests, occupyRooms, fillPremium } from '../utility'

const testGuestData = [
  23,
  45,
  155,
  374,
  22,
  99,
  100,
  101,
  115,
  209
];

/**
 * The optimization works in the following order
 * 1. Split the guests into two categories:
 * - Cat A pays greater than 100
 * - Cat B pays less than or equal to 100
 * 2. Sort each category according to the value from greatest to least
 * 3. Move top N from Cat A into new array where N is the number of premium rooms
 * 4. Store diff between count of Cat A and number of premium rooms if premium
 * room count is greater as D
 * 5. Move top D from Cat B into premium room array
 * 6. Move to M from Cat B into new array where M is the number of economy rooms
 */

 /**
  * Optimiation functions
  * 1. Split list of guests into two groups based on supplied criteria
  * 2. Fill rooms
  * 3. 
  */

// const optimize = (guestList, threshold, premiumRoomCount, economyRoomCount) => {
//   // First function
//   const sortedGuestList = guestList.sort((a, b) => b - a)
//   const premiumGuests = sortedGuestList.filter(guest => guest > threshold)
//   const economyGuests = sortedGuestList.filter(guest => guest <= threshold)

//   // Second function (fills the rooms)
//   const occupiedPremium = premiumGuests.slice(0, premiumRoomCount);

//   // Third function (fill premium)
//   const unoccupiedPremiumCount = premiumRoomCount - premiumGuests.length;
//   if (unoccupiedPremiumCount > 0) {
//     const economyToPrem = economyGuests.slice(0, unoccupiedPremiumCount)
//     occupiedPremium = [...occupiedPremium, ...economyToPrem]
//     economyGuests = economyGuests.slice(unoccupiedPremiumCount)
//   }

//   const occupiedEconomy = economyGuests.slice(0, economyRoomCount)
// }

describe('optimization', () => {
  describe('categorizedGuests', () => {
    it('should create a list of premium-paying guests based on criteria', () => {
      expect(categorizeGuests(testGuestData, 100).premiumGuests).toEqual([
        101,
        115,
        155,
        209,
        374
      ]);
    });

    it('should create a list of premium-paying guests based on criteria', () => {
      expect(categorizeGuests(testGuestData, 100).economyGuests).toEqual([
        22,
        23,
        45,
        99,
        100,
      ]);
    });
  });

  describe('occupyRooms', () => {
    it('should fill return a list of guests based on available room count', () => {
      expect(occupyRooms([101, 155, 374], 2)).toEqual([101, 155]);
    });
  });

  describe('fillPremium', () => {
    it('should fill remaining premium rooms', () => {
      expect(fillPremium(6, 5, [100, 99, 45, 23, 22], [374, 209, 155, 115, 101]).occupiedPremium).toEqual([
        374,
        209,
        155,
        115,
        101,
        100
      ]);
    });

    it('should move top economy guests', () => {
      expect(fillPremium(6, 5, [100, 99, 45, 23, 22], [374, 209, 155, 115, 101]).economyGuests).toEqual([
        99,
        45,
        23,
        22
      ]);
    });
  });
});