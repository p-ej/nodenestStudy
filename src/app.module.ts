import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { UsersController } from './users/users.controller';
import { AdminController } from './admin/admin.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, UsersController, AdminController],
  providers: [AppService],
})
export class AppModule {}
