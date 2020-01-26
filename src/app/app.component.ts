import { Component, OnInit } from '@angular/core';
import { COMPONENT_STATE } from './util/const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ang-comp-arch';

  widget1State: string = COMPONENT_STATE.LOADER;
  widget2State: string = COMPONENT_STATE.LOADER;
  widget3State: string = COMPONENT_STATE.LOADER;

  widget1Message: string = '1 Loading...';
  widget2Message: string = '2 Loading...';
  widget3Message: string = '3 Loading...';

  constructor() { }

  ngOnInit() {

    let i = 0;

    setInterval(() => {

      if (i === 0) {
        this.widget1State = COMPONENT_STATE.ERROR;
        this.widget1Message = '1 Error';

        this.widget2State = COMPONENT_STATE.LOADER;
        this.widget2Message = '2 Loading';

        this.widget3State = COMPONENT_STATE.NO_DATA;
        this.widget3Message = '3 No Data';

      }

      if (i === 1) {
        this.widget1State = COMPONENT_STATE.NO_DATA;
        this.widget1Message = '1 No data';

        this.widget2State = COMPONENT_STATE.ERROR;
        this.widget2Message = '2 Error';

        this.widget3State = COMPONENT_STATE.LOADER;
        this.widget3Message = '3. Loading...';
      }

      if (i === 2) {
        this.widget1State = COMPONENT_STATE.DATA;
        this.widget1Message = '1 Data';

        this.widget2State = COMPONENT_STATE.DATA;
        this.widget2Message = '2 Data';

        this.widget3State = COMPONENT_STATE.ERROR;
        this.widget3Message = '3. Error';
      }

      if (i === 3) {
        this.widget1State = COMPONENT_STATE.LOADER;
        this.widget1Message = '1 Loader';

        this.widget2State = COMPONENT_STATE.NO_DATA;
        this.widget2Message = '2 No Data';

        this.widget3State = COMPONENT_STATE.DATA;
        this.widget3Message = '3 Data';
      }

      i = (i + 1) % 4;

    }, 3000);



  }

}
