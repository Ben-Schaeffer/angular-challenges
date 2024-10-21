import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fib',
  standalone: true,
})
export class FibPipe implements PipeTransform {
  transform(value: number): number {
    if (value < 0) {
      return 0;
    }
    return this.fibonacci(value);
  }

  private fibonacci(n: number): number {
    if (n <= 1) {
      return n;
    }
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }
}
