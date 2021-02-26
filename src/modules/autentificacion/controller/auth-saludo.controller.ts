import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { Alumno } from '../../../model/Alumno';
import { AuthServicioService } from '../service/auth-servicio.service';

@Controller('alumnos')
export class AuthSaludoController {

    alumnos: Alumno[] = [];
    constructor(
        private readonly authService: AuthServicioService
        ) {
      }

    @Post()
    saludarPost(@Body() alumno: Alumno): Promise<Alumno> {
        alumno.fecha = new Date();
        alumno.estado = true;
        return this.authService.registrarAlumnos(alumno);
    }

    @Get()
    listarAlumnos(): Promise<Array<Alumno>> {
        return this.authService.listarAlumnos();
    }

    @Post()
    nuevoAlumno(@Body() alumnos: Alumno): Alumno {
        const nuevoUsuario = {...alumnos, idAlumno: ''+(this.alumnos.length)}
        this.alumnos = [...this.alumnos, nuevoUsuario];
        return nuevoUsuario;
    }

    @Get(':id')
    getAlumnoPorId(@Param('id') id: string): Alumno {
        const alumno = this.alumnos.find(alumno => alumno.idAlumno == id);
        return alumno;
    }

    @Put(':id')
    actualizarAlumno(@Param('id') id: string, @Body() alumno: Alumno): Alumno {
        this.alumnos = this.alumnos.filter(alumno => alumno.idAlumno !== id);
        this.alumnos = [...this.alumnos, this.nuevoUsuario(alumno)];
        return alumno;
    }

    @Delete(':id')
    eliminarAlumno(@Param('id') id: string) {
        this.alumnos = this.alumnos.filter(alumno => alumno.idAlumno !== id);
    }


}
