import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  clicked = false
  constructor() { }

  ngOnInit(): void {
  }
  darkandlightmode(){
    this.clicked = !this.clicked;
    document.body.classList.toggle('dark-theme');
  }
}
