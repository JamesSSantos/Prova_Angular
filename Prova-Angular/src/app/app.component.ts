import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/bootstrap/dist/css/bootstrap.css'],
})
export class AppComponent implements OnInit {
  @Input() numero = '';
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'Calculadora-Binarios';
  decimal = 0;
  calcular() {
   this.decimal = parseInt(this.numero, 2);
  }
}
