import { Test, TestingModule } from '@nestjs/testing';
import { CorreosGruposController } from './correos_grupos.controller';
import { CorreosGruposService } from './correos_grupos.service';

describe('CorreosGruposController', () => {
  let controller: CorreosGruposController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CorreosGruposController],
      providers: [CorreosGruposService],
    }).compile();

    controller = module.get<CorreosGruposController>(CorreosGruposController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
