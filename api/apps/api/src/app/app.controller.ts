import {Controller, Get, Param, Query} from '@nestjs/common';

import { AppService } from './app.service';
import {APIService} from "./API.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly apiService: APIService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('users/:term')
  async getUsers(@Param('term') term: string) {
    return await this.apiService.getUsers(term);
  }

  @Get('user/feed/:userId')
  async getUserFeed(@Param('userId') userId: number, @Query('cursor') cursor: string) {
    return await this.apiService.getUserFeed(userId, cursor);
  }

  @Get('user/export/:userId')
  async getUserExport(@Param('userId') userId: number) {
    return await this.apiService.exportUser(userId);
  }
}
