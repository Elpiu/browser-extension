import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me-card',
  templateUrl: './me-card.component.html',
  styleUrls: ['./me-card.component.scss']
})
export class MeCardComponent {

  dataAssetLinks: any = [
    {"asset": "assets/icons/github.png",
      "link": "https://github.com/Elpiu"},
    {"asset": "assets/icons/linkedin.png",
      "link": "https://www.linkedin.com/in/elpidio-mazza-72b641155/"}
  ]

  dataNameRole: any = {
    "name" : "Elpidio Mazza",
    "role": "Full-Stack Developer"
  }

  public openALink($event: MouseEvent, url: string){
    $event.preventDefault();
    window.open(url, "_blank");
  }

  constructor() { }

}
