import { Test, TestingModule } from '@nestjs/testing';
import { MiModuloController } from './mi-modulo.controller';

describe('MiModuloController', () => {
  let controller: MiModuloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MiModuloController],
    }).compile();

    controller = module.get<MiModuloController>(MiModuloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
