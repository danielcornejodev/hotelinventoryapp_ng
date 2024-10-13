export interface Room {
    totalRooms: number;
    availableRooms: number;
    bookedRooms: number;
}

export interface RoomList {
    roomType: string,
    ameneties: string,
    price: number,
    checkinTime: Date,
    checkoutTime: Date,
  }