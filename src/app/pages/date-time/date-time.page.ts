import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  fechaNaci: Date = new Date();
  customPickerOptions = {
    buttons: [
      {
        text: 'hola',
        handler: ( event ) => {
          console.log(event);
        }
      },
      {
        text: 'Jhonn'
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  cambioFecha( evento ){
    console.log(evento);
    console.log( new Date(evento.detail.value) );
  }

}
