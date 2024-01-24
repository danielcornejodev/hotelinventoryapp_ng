import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [RouterOutlet, RoomsComponent],
  templateUrl: './app.component.html', //alternatively you could use an inline HTML template here using backticks.
  styleUrl: './app.component.scss'
  //styles: [`h1 { color: red}`]
})
export class AppComponent {
  title = 'hotelinventoryapp';
}
