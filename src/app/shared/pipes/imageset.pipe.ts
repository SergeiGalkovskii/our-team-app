import { Pipe, PipeTransform } from '@angular/core';

const CORRECT_BREAKPOINTS = {
  'w200': '200w',
  'w400': '400w',
  'w1080': '1080w',
  'w1920': '1920w',
  'w2560': '2560w'
};

@Pipe({
  name: 'imageset'
})
export class ImagesetPipe implements PipeTransform {

  transform(imageUrl: { [w: string]: string }): string {
    if (typeof imageUrl === 'object' && imageUrl !== null) {
      return Object.entries(imageUrl).map(([key, value]) => `${value} ${CORRECT_BREAKPOINTS[key]}`).join(',');
    }

    return '';
  }

}
