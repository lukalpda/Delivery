import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separador'
})
export class SeparadorPipe implements PipeTransform {

  transform(value: any): any {
    const informe = value.toString();

    const nuevo = informe.replace(/\./gi, '<br>');

    return nuevo;

    // return document.getElementById('informe').innerHTML = nuevo;
  }
}
