import { Test, TestingModule } from '@nestjs/testing';
import { ReplayIoService } from './replay-io.service';

describe('ReplayIoService', () => {
  let service: ReplayIoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReplayIoService],
    }).compile();

    service = module.get<ReplayIoService>(ReplayIoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
