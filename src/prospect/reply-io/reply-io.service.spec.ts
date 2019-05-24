import { Test, TestingModule } from '@nestjs/testing';
import { ReplyIoService } from './reply-io.service';

describe('ReplayIoService', () => {
  let service: ReplyIoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReplyIoService],
    }).compile();

    service = module.get<ReplyIoService>(ReplyIoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
