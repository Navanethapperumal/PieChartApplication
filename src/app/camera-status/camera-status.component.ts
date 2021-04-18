import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-camera-status',
  templateUrl: './camera-status.component.html',
  styleUrls: ['./camera-status.component.scss']
})
export class CameraStatusComponent implements OnInit {

  data: BehaviorSubject<object[]> = new BehaviorSubject<object[]>([]);
  constructor() { }

  ngOnInit(): void {
    this.data.next(
      [
        {
          "name": "Germany",
          "value": 8945000
        },
        {
          "name": "USA",
          "value": 5000000
        },
        {
          "name": "France",
          "value": 7200000
        },
        {
          "name": "UK",
          "value": 6200000
        }
      ]);
  }

}
