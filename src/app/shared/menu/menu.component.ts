import { Component } from '@angular/core';

interface Link{
  nombre:string,
  ruta:string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  link:Link[]=[
    {nombre: 'Barras',ruta:'/graficas/barras'},
    {nombre: 'Barras Dobles',ruta:'/graficas/barrasdoble'},
    {nombre: 'Dona',ruta:'/graficas/dona'},
    {nombre: 'Dona HTTP',ruta:'/graficas/donahttp'},
  ]

}
