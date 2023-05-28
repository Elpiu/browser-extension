import {AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

  @ViewChild('accordingDiv') accordionElement: ElementRef<HTMLDivElement> | undefined;

  constructor(private elementRef: ElementRef) {
  }

  goToBeenPowneed($event: MouseEvent){
    $event.preventDefault();
    window.open("https://haveibeenpwned.com/", "_blank");
  }

  goToHowSecureMyPassword($event: MouseEvent){
    $event.preventDefault();
    window.open("https://www.security.org/how-secure-is-my-password/", "_blank");
  }


}
