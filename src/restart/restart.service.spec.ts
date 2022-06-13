import { Test, TestingModule } from '@nestjs/testing';
import { RestartService } from './restart.service';

describe('RestartService', () => {
  let service: RestartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestartService],
    }).compile();

    service = module.get<RestartService>(RestartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
