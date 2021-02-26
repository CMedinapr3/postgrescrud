import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HolaMundoController } from './hola-mundo/hola-mundo.controller';
import { PruebaComandoController } from './prueba-comando.controller';
import { MiModuloController } from './modulos/mi-modulo.controller';
import { PersonalizadoController } from './modulos/personalizado.controller';
import { SaludoService } from './module/service/saludo.service';

import { AuthModule } from './modules/autentificacion/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      name: "default",
      type: "postgres",
      host: "192.168.1.3",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "CURSO",
      synchronize: false,
      entities: [__dirname + '/model/**/*{.ts.js}'],
      autoLoadEntities: true,
    }),

  ],
  controllers: [
    AppController, 
    HolaMundoController, 
    PruebaComandoController, 
    MiModuloController, 
    PersonalizadoController,
    
  ],
  providers: [
    AppService, 
    SaludoService
  ],
})
export class AppModule {}
