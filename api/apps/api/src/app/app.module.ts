import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {APIService} from "./API.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [APIService, AppService],
})
export class AppModule {}
