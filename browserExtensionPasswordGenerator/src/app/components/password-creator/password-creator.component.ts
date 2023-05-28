import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-password-creator',
  templateUrl: './password-creator.component.html',
  styleUrls: ['./password-creator.component.scss']
})
export class PasswordCreatorComponent implements OnInit {

  @ViewChild('lenghtSelector') lenghtSelectorElement!: ElementRef<HTMLInputElement> ;
  @ViewChild('passwordOutSelector') passwordOutElement!: ElementRef<HTMLInputElement> ;

  numeroCaratteriCopiati = 0
  hideText = true

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }


  public generatePassword(passwordLength: number) {
    passwordLength < 8 ? passwordLength = 8 : passwordLength

    var chars =
      "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    return password;
  }

  generateNewPassword($event: Event) {
    $event.preventDefault()
    this.passwordOutElement.nativeElement.value =
      this.generatePassword(Number(this.lenghtSelectorElement.nativeElement.value));
  }

  copiaPassword($event: Event) {
    $event.preventDefault()
    window.navigator.clipboard.writeText(this.passwordOutElement.nativeElement.value)
    this.hideText = false
    this.numeroCaratteriCopiati = this.passwordOutElement.nativeElement.value.length
  }

}
