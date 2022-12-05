import { Body, Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUser } from './create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('create_user')
  handleCreateUser(@Body() createUser: CreateUser): Array<any> {
    return this.appService.createUser(createUser);
  }
}
