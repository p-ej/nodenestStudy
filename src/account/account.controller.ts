import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({host:':account.ac.localhost'})
export class AccountController {

    @Get()
    getInfo(@HostParam('account') account : string){
        return account;
    }
}
