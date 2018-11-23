import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'numword',
  pure: true
})
export class Numword implements PipeTransform {

  transform(input: number, arg1: string, arg2: string, arg3: string): string {
    if (input % 100 >= 11 && input % 100 <= 19) {
      return (input + " " + arg3);
    }
    else if (input % 10 === 1) {
      return (input + " " + arg1);
    }
    else if (input%10 >= 2 && input%10 <= 4) {
      return (input + " " + arg2);
    }
    return (input + " " + arg3);
  }
}
