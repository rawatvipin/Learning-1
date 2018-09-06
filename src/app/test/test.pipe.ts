import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpace'
})
export class TestPipe implements PipeTransform {

  transform(value: string, startIndex: number, count: number): any {
    value = value.replace(' ', '')
    value = value.slice(startIndex, count);

    return value;
  }

}
