import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navmac',
  templateUrl: './navmac.component.html',
  styleUrls: ['./navmac.component.css']
})
export class NavmacComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  redireccionar(url: string) {
    this.router.navigate([url])
  }

}
