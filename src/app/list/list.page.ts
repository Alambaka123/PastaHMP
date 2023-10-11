import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  today: string = "9 September 2023"
  currentDate = new Date()


  month_str = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  day_str = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  is5daysago = false
  istoday = true
  numberClicked = 0
  textcolor = "red"

  couponcode: string = "0000"
  strvalid: string = "Invalid"
  discount: number = 0
  textPrice = ""

  products = [
    {
      name: "Laptop",
      price: 999.99,
      description: "A powerful laptop for work and gaming.",
      discount: 20,
    },
    {
      name: "Smartphone",
      price: 499.99,
      description: "A high-end smartphone with advanced features.",
      discount: 10,
    },
    {
      name: "Headphones",
      price: 99.99,
      description: "Over-ear headphones for immersive audio.",
      discount: 0,
    },
  ];


  constructor() { }

  ngOnInit() {
  }

  today_ind(): string {
    //untuk mengambil tanggal dd/mm/yyyy

    //d
    const d = this.currentDate.getDate()
    //m --> initial 0
    const m = this.currentDate.getMonth() + 1
    //y
    const y = this.currentDate.getFullYear()
    //day
    const dy = this.currentDate.getDay();

    return this.day_str[dy] + ", " + d + "/" + this.month_str[m] + "/" + y
  }

  goYesterday() {
    const todays = this.currentDate.getDate()
    const cur_today = this.currentDate.getDate() - 1
    this.currentDate.setDate(cur_today)

    this.numberClicked++
    if (this.numberClicked == 5) {
      this.is5daysago = true
    }
    if (this.currentDate.getDate() < todays) this.istoday = false
  }

  goTomorrow() {
    const today_date = new Date()
    const todays = this.currentDate.getDate()
    this.currentDate.setDate(todays + 1)
    if (this.currentDate.getDate() == today_date.getDate()) this.istoday = true
  }

  checkValid() {
    if (this.couponcode == '1234') {
      this.strvalid = 'Valid'
      this.discount = 5
      this.textcolor = 'green'
    } else if (this.couponcode == '6789') {
      this.strvalid = 'Valid'
      this.discount = 10
      this.textcolor = 'green'
    } else {
      this.strvalid = 'Invalid'
      this.discount = 0
      this.textcolor = 'red'
    }
  }
}
