import { Controller, Get } from '@nestjs/common';

@Controller({host : 'admin.localhost'})
export class AdminController {
    // Sub-Domain Routing
    // 컨트롤러 데코레이터는 들어오는 요청의 HTTP 호스트가 특정값과 일치하도록 host 옵션을 사용할 수 있다.
    @Get()
    index(): string {
        return 'Admin page';
    }
}
