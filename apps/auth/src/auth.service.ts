import { Injectable } from '@nestjs/common';
import { RmqContext } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  getHello(): string {
    return 'Hello World!';
  }

  getUser(context: RmqContext) {
    const channel = context.getChannelRef();
    const message = context.getMessage();
    channel.ack(message);
    return 'In getUser of auth module';
  }
}
