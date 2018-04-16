import { arrowAnimation } from './../animations';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [arrowAnimation]
})
export class NavigationComponent implements OnInit {
  arrowAnimation = 'true';
  @Input() toolbarTitle;
  @Input() goBack;

  constructor() {}

  ngOnInit() {}
}
