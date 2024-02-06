import { Processor, Process, OnQueueCompleted } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('my-queue')
export class MyQueueProcessor {
    @Process()
    process(job: Job) {
        console.log(job.data);
    }

    @OnQueueCompleted()
    async completed() {
        console.log('Job completed.');
    }
}