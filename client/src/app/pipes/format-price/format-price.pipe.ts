import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice'
})
export class FormatPricePipe implements PipeTransform {

  transform(value: number): string {
    return new Intl.NumberFormat("sv-SE", { useGrouping: true }).format(value);
  }

}
