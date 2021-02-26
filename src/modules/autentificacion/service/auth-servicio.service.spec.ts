import { Test, TestingModule } from '@nestjs/testing';
import { AuthServicioService } from './auth-servicio.service';

describe('AuthServicioService', () => {
  let service: AuthServicioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthServicioService],
    }).compile();

    service = module.get<AuthServicioService>(AuthServicioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
