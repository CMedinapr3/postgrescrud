import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alumno } from '../../../model/Alumno';

@Injectable()
export class AuthServicioService {
    constructor(
        @InjectRepository(Alumno)
        private readonly _alumnoRepository: Repository<Alumno>,
     ) {}
    public registrarAlumnos(registro: Alumno): Promise<Alumno> {
        return this._alumnoRepository.save(registro);
    }

    public listarAlumnos(): Promise<Array<Alumno>> {
        return this._alumnoRepository.find({idAlumno: '2'});
    }
}
