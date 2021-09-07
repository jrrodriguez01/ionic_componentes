import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'action sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle',
      name: 'alerta',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'button',
      redirectTo: '/button'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
