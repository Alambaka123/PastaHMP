import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  imgSetting = ""
  txtPassword = ""
  cbPassword = false
  cbNumber = false
  cbSymbol = false

  constructor() { }

  ngOnInit() {
  }

  checkPassword() {
    if (this.txtPassword.length >= 6) this.cbPassword = true
    else this.cbPassword = false

    if (this.txtPassword.match(/[0-9]/)) this.cbNumber = true
    else this.cbNumber = false

    if (this.txtPassword.match(/[!@#$%^&*]/)) this.cbSymbol = true
    else this.cbSymbol = false


  }

}
