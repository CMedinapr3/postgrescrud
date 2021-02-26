import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Alumno } from 'src/model/Alumno';
import { Repository } from 'typeorm';

@Injectable()
export class AuthServicioService{
    constructor(
        @InjectRepository(Alumno)
        private readonly _alumnoRepository: Repository<Alumno>,
    ){}
    public registrarAlumno (registro: Alumno ): Promise<Alumno>{
        return this._alumnoRepository.save(registro);
    }

    public listarAlumnos(): Promise<Array<Alumno>>{
        return this._alumnoRepository.find();
    }
}