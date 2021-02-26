import { Test, TestingModule } from '@nestjs/testing';
import { AuthServicioService } from './auth-servicio.service';

describe('AuthServicioService', () => {
  let controller: AuthServicioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthServicioService],
    }).compile();

    controller = module.get<AuthServicioService>(AuthServicioService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
