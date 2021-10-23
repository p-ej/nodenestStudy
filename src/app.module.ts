import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { UsersController } from './users/users.controller';
import { AdminController } from './admin/admin.controller';
import { AccountController } from './account/account.controller';
import { ApiController } from './api/api.controller';
import { TestController } from './test/test.controller';

@Module({
  imports: [],
  controllers: [TestController, AccountController, AdminController, ApiController, AppController, CatsController, UsersController],
  providers: [AppService],
})
export class AppModule {}
