import { Test, TestingModule } from '@nestjs/testing';
import { TypeusersService } from './typeusers.service';

describe('TypeusersService', () => {
  let service: TypeusersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeusersService],
    }).compile();

    service = module.get<TypeusersService>(TypeusersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
