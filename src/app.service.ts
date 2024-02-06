import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class AppService {

  constructor(@InjectQueue('my-queue') private queue: Queue) {}

  async processJob(payload: any) {
    await this.queue.add(payload);
  }
}
