import { Test, TestingModule } from '@nestjs/testing';
import { HolaMundoController } from './hola-mundo.controller';

describe('HolaMundoController', () => {
  let controller: HolaMundoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HolaMundoController],
    }).compile();

    controller = module.get<HolaMundoController>(HolaMundoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
