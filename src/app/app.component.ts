import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  myData = [
    { Nombre: 'Juan', Edad: 30, Ciudad: 'México' },
    { Nombre: 'Ana', Edad: 25, Ciudad: 'Guadalajara' },
    // ...
  ];

  myHeaders = ['Nombre', 'Edad', 'Ciudad'];
  loading = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (event instanceof NavigationEnd) {
        this.loading = false;
      }
    });
  }
}
