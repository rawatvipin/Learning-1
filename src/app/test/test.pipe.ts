import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSlice'
})
export class TestPipe implements PipeTransform {

  transform(value: string, startIndex: number, count: number): any {
    if (value) {
      value = value.replace(' ', '');
      value = value.slice(startIndex, count);
    }
    return value;
  }

}


@Pipe({ name: 'flyingHeroes', pure: false })
export class FlyingHeroesPipe implements PipeTransform {
  transform(allHeroes: any) {
    debugger
    return allHeroes.filter(hero => hero.canFly);
  }
}
