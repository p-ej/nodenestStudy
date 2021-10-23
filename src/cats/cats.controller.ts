import { Controller, Get, Header, HttpCode, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';
import { stringify } from 'querystring';

@Controller('cats')
export class CatsController {

    // Post 엔드포인트 테스트
    // @Post()
    // @HttpCode(204)
    // create(){
    //     return 'This action adds a new cat Post';
    // }
    
    // @Post()
    // create() : string{
    //     return 'This action adds a new cat Post';
    // }

    @Post()
    @Header('Cache-Control', 'none')
    create(){
        return 'This action adds a new cat Post headers';
    }
    // Get 엔드포인트 테스트 or 패턴 기반 라우트
    @Get('ab*cd')
    findAll(@Req() request : Request) : string {
        console.log(request);
        return 'This actin returns all cats or pattern route';
    }

    // @Get(':id')
    // findOne(@Param() params) : string{
    //     console.log(params.id);
    //     return 'This action returns a #${params.id}'+ params.id +'cat';
    // }

    @Get(':id')
    findOne(@Param('id') id: string) : string {
        return `This action returns a #${id} cat `;
    }

    

    @Get()
    @Redirect('https://nestjs.com', 301)
    redirectMethod(){}

    // @Get('docs')
    // @Redirect('https://docs.nestjs.com', 302)
    // getDocs(@Query('version') version){
    //     if(version && version === '5'){
    //         return {url : 'https://docs.nestjs.com/v5/'}
    //     }
    // }
}
