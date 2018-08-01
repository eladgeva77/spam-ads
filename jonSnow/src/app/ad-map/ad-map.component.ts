import { Component, OnInit } from '@angular/core';
import { AdDispatcher, IAdEvent } from '../../../../src/ad-dispatcher';
import { createElement } from '@angular/core/src/view/element';

@Component({
  selector: 'app-ad-map',
  templateUrl: './ad-map.component.html',
  styleUrls: ['./ad-map.component.css']
})
export class AdMapComponent implements OnInit {

  dispatcher = new AdDispatcher();

  constructor() { 
    this.dispatcher.registerToAdEvents((evt) => {
      this.createElement(evt);
    });
  }

  createElement(adData)
  {
    let map = document.querySelector("#mapWithAds");
    let elementToAdd;

    if(adData.type === 'IMAGE')
    {
      elementToAdd = document.createElement("img");
      elementToAdd.src = adData.creative.url;
    }
    else
    {
      elementToAdd = document.createElement("video");
      elementToAdd.autoplay = true;
      elementToAdd.muted = true;
      let video_source = document.createElement("source");
      video_source.src = adData.creative.url;
      elementToAdd.appendChild(video_source);
    }

    elementToAdd.style.position = "absolute";
    elementToAdd.style.left = adData.coordinates.x + "px";
    elementToAdd.style.top = adData.coordinates.y + "px";
    elementToAdd.style.border = "5px solid #fff";
    map.appendChild(elementToAdd);

    setTimeout(function(){
      map.removeChild(elementToAdd);
    }, 5000);

  }
  ngOnInit() {
  }

}
