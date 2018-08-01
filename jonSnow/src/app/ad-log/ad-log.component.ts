import { Component, OnInit } from '@angular/core';
import { AdDispatcher, IAdEvent } from '../../../../src/ad-dispatcher';
import {TimeFilterPipe} from '../time-filter.pipe';


@Component({
  selector: 'app-ad-log',
  templateUrl: './ad-log.component.html',
  styleUrls: ['./ad-log.component.css']
})
export class AddLopComponent implements OnInit {

   dispatcher = new AdDispatcher();
   myAdArray = [];

   startTimeFilter : number;
   endTimeFilter : number;

  constructor() { 
    this.dispatcher.registerToAdEvents((evt) => {
      this.myAdArray.unshift(
        {
          adData : evt,
          time : new Date()
        }
      );
    });
  }

getImageSrc(adData){
  return adData.type === 'IMAGE' ? "../../src/images/ic_image_black_24px.svg" 
                                 : "../../src/images/ic_movie_creation_black_24px.svg";
}

  ngOnInit() {
  }

}
