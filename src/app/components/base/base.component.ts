import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { COMPONENT_STATE } from 'src/app/util/const';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit, OnChanges {

  @Input() state: string;
  @Input() message: string;

  showLoader: boolean = false;
  showError: boolean = false;
  showNoData: boolean = false;
  showData: boolean = false;

  constructor() { }

  ngOnChanges() {

    switch (this.state) {
      case COMPONENT_STATE.DATA: {

        this.showData = true;
        this.showError = false;
        this.showLoader = false;
        this.showNoData = false;

        break;
      }
      case COMPONENT_STATE.ERROR: {

        this.showData = false;
        this.showError = true;
        this.showLoader = false;
        this.showNoData = false;

        break;
      }
      case COMPONENT_STATE.LOADER: {

        this.showData = false;
        this.showError = false;
        this.showLoader = true;
        this.showNoData = false;

        break;
      }
      case COMPONENT_STATE.NO_DATA: {

        this.showData = false;
        this.showError = false;
        this.showLoader = false;
        this.showNoData = true;

        break
      }
    }
  }

  ngOnInit() {



  }

}
