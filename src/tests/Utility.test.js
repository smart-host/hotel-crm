import { categorizeGuests, occupyRooms, fillPremium, optimizeOccupancy } from '../utility'

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

describe('optimization', () => {
  describe('categorizedGuests', () => {
    it('should create a list of premium-paying guests based on criteria', () => {
      expect(categorizeGuests(testGuestData, 100).premiumGuests).toEqual([
        374,
        209,
        155,
        115,
        101
      ]);
    });

    it('should create a list of economy-paying guests based on criteria', () => {
      expect(categorizeGuests(testGuestData, 100).economyGuests).toEqual([
        100,
        99,
        45,
        23,
        22
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

  describe('optimizeOccupancy', () => {
    it('should fill premium rooms', () => {
      expect(optimizeOccupancy(testGuestData, 100, 3, 3).occupiedPremium).toEqual([
        374, 209, 155
      ]);
    });

    it('should optimize occupancy for premium rooms', () => {
      expect(optimizeOccupancy(testGuestData, 100, 6, 5).occupiedPremium).toEqual([
        374, 209, 155, 115, 101, 100
      ]);
    });
  });
});