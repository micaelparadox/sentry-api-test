/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}
  // ) {
  //   client.log('AppSevice Loaded', 'test', true); // creates log asBreadcrumb //
  //   client.instance().addBreadcrumb({
  //     level: Severity.Debug,
  //       message: 'How to use native breadcrumb',
  //       data: { context: 'WhatEver' },
  //     });
  //   client.debug('AppService Debug', 'context');

  @Get('oporra')
  getHello(): string {
    return this.appService.getHello();
  }
}
