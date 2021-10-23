import { Controller, Get } from '@nestjs/common';

@Controller({host : 'api.localhost'})
export class ApiController {

    // 같은 루트의 경로
    @Get() 
    index() : string{
        return 'Hi, Api Call';
    }
}
