import { Component, OnInit } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})

export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel'

  numberOfRooms = 10;

  hideRooms = false;

  rooms : Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
