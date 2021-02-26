import { Controller, Get } from '@nestjs/common';

@Controller('hola-mundo')
export class HolaMundoController {
    @Get()
    saludo(): string{
        return 'saludo';
    }
    @Get('saludo')
    saludo2(): string{
        return 'saludo2';
    }
}
