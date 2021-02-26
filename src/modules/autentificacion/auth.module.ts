import { Module } from '@nestjs/common';
import { AuthSaludoController } from './controller/auth-saludo.controller';
import { AuthServicioService } from './service/auth-servicio.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Docente } from '../../model/Docente';
import { Clase } from '../../model/Clase';
import { Materia } from '../../model/Materia';
import { Alumno } from '../../model/Alumno';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      Docente,
      Clase,
      Materia,
      Alumno
    ])
  ],
  controllers: [AuthSaludoController],
  providers: [AuthServicioService]
})
export class AuthModule {}
