import {Pipe, PipeTransform} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {DYNAMIC_CONFIG} from '@jf/consts/dynamic-config.const';
import {STATIC_CONFIG} from '@jf/consts/static-config.const';

@Pipe({name: 'sp'})
export class StripePipe implements PipeTransform {
  constructor() {
    this.currencyPipe = new CurrencyPipe(STATIC_CONFIG.lang);
  }

  currencyPipe: CurrencyPipe;

  transform(
    data: number,
    currencyCode?: string,
    display?: 'code' | 'symbol' | 'symbol-narrow' | string | boolean,
    digitsInfo?: string,
    locale?: string
  ): string {
    return this.currencyPipe.transform(
      data / 100,
      currencyCode || DYNAMIC_CONFIG.currency.primary,
      display,
      digitsInfo,
      locale
    );
  }
}
