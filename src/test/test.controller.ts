import { Controller, Get } from '@nestjs/common';

@Controller({host : 'test.example.com'})
export class TestController {
    @Get()
    getInfo(){
        return 'test exmaple com Call !!';
    }
}
