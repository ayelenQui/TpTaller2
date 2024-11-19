
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-funciones',
  templateUrl: './funciones.component.html',
  standalone: true,
  styleUrls: ['./funciones.component.css']
})
export class FuncionesComponent {
  @Input() title: string = '';
  @Output() click = new EventEmitter<void>();

  onClick() {
    this.click.emit();
  }
}
