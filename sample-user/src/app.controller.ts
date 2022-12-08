import { Controller, Get } from '@nestjs/common';
import {
  EventPattern,
  MessagePattern,
  Payload,
  Ctx,
  RmqContext,
} from '@nestjs/microservices';
import { AppService } from './app.service';
import { User } from './user.dto';
import { CreateUser } from './create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ cmd: 'get_users' })
  getUsers(): Array<User> {
    return this.appService.getUsers();
  }

  @EventPattern('create_user')
  handleCreateUser(
    @Payload() createUser: CreateUser,
    @Ctx() context: RmqContext,
  ): void {
    console.log(context);
    this.appService.createUser(createUser);
  }
}
