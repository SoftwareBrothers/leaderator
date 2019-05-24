import { Module, OnModuleInit, Logger } from '@nestjs/common';
import { BullModule, InjectQueue } from 'nest-bull';
import { Queue } from 'bull';
import { ProspectProcessor } from './processors';
import 'dotenv/config';

@Module({
  imports: [
    BullModule.forRoot({
      name: 'store',
      options: {
        redis: {
          port: 6379,
        },
      },
      processors: [
        {
          concurrency: 1,
          name: 'getProspect',
          callback: ProspectProcessor,
        },
      ],
    }),
  ],
  providers: [],
  controllers: [],
})
export class BullQueueModule {
  private readonly logger = new Logger(BullQueueModule.name, true);
  constructor(@InjectQueue('store') readonly queue: Queue) {}

  onModuleInit() {
    this.queue
      .add(
        'getProspect',
        { currency: 'USD' },
        {
          repeat: { cron: '* * * * *', tz: 'Etc/GMT-5' },
          removeOnFail: false,
        },
      )
      .then(job => {
        this.logger.log(
          `Job ${job.name} successfully started and will run every minute`,
        );
      });

    this.queue.on('completed', (job, result) => {
      this.logger.log(`Job ${job.name} completed! Result: ${result}`);
    });

    this.queue.on('failed', (job, err) => {
      this.logger.error(err);
    });
  }
}
