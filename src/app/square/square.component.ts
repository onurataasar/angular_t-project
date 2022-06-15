import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent implements OnInit {
  random = 0;
  constructor() {}
  handleClick() {
    this.random = Math.round(Math.random() * 100);
  }
  centered = false;
  disabled = false;
  unbounded = false;

  color?: string;

  ngOnInit() {}
}
