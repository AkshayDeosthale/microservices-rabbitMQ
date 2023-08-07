import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.authService.getHello();
  }
  @MessagePattern({ cmd: 'get-user' })
  getUser(@Ctx() context: RmqContext): string {
    return this.authService.getUser(context);
  }
}
