import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-angular',
  templateUrl: './default-angular.component.html',
  styleUrls: ['./default-angular.component.css'],
})
export class DefaultAngularComponent implements OnInit {
  title = 'meduim-angular-ssr';

  constructor() {}

  ngOnInit(): void {}
}
