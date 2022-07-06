import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokTypeColor'
})
export class PokTypeColorPipe implements PipeTransform {

  transform(type: string): string {
    let color='';
    switch(type) {
      case 'feu':
        color = 'red';
        break;

        case 'eau':
        color = 'blue';
        break;

        case 'plante':
          color = 'green';
          break;

    }
    return 'chip ' + color;
  }

}
