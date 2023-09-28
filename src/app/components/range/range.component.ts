import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css']
})
export class RangeComponent implements OnInit {

  @Input()
	rangeCover:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
