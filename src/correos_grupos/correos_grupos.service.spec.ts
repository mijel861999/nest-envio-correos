import { Test, TestingModule } from '@nestjs/testing';
import { CorreosGruposService } from './correos_grupos.service';

describe('CorreosGruposService', () => {
  let service: CorreosGruposService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CorreosGruposService],
    }).compile();

    service = module.get<CorreosGruposService>(CorreosGruposService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
