import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // ❌ Remove this line if not using standalone components
  // imports: [RouterOutlet], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'journey';
}
