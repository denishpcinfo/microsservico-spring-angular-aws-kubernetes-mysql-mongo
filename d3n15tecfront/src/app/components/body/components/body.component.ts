import { Component } from '@angular/core';
import { ProductSlider } from 'src/app/shared/data/slider';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  public ProductSliderConfig: any = ProductSlider;

  constructor() {
  }

  ngOnInit(): void {

  }
}
