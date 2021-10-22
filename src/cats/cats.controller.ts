import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {

    @Get('test')
    findAll() : string {
        return 'This actin returns all cats';
    }
}
