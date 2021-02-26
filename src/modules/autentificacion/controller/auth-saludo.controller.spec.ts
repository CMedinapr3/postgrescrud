import { Test, TestingModule } from '@nestjs/testing';
import { AuthSaludoController } from './auth-saludo.controller';

describe('AuthSaludoController', () => {
  let controller: AuthSaludoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthSaludoController],
    }).compile();

    controller = module.get<AuthSaludoController>(AuthSaludoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
