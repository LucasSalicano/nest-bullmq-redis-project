import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { MyQueueProcessor } from './my-queue.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'my-queue',
    }),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, MyQueueProcessor],
})
export class AppModule { }
