import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    switch (value) {
      case 'SMALL':
        return 'LARGE';
        break;
      case 'LARGE':
        return 'SMALL';
        break;
      case 'MEDIUM':
        return 'MEDIUM';
        break;
    }

    // if (value === 'SMALL') {
    //   return 'LARGE';
    // }
  }

}
