import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Docente } from './model/Docente';


@Controller()
export class AppController {

  constructor(
    private readonly appService: AppService
    ) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  

  @Get('saludo/:dato')
  saludar(@Param('dato') dato: string): string {
    return 'Hola Mundo';
  }
}
