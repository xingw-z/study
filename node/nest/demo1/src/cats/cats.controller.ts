import { Controller, Get, Req, Post, HttpCode, Header, Param } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Post()
    @Header('Cache-Control', 'none')
    create(): string {
        return 'This action adds a new cat';
    }

    // @Get()
    // findAll(): string {
    //     return 'This action returns all cats';
    // }
    @Get('ab*cd')
    findAll() {
        return 'This route uses a wildcard';
    }
    @Get(':id')
    findOne(@Param('id') id: any): string {
        return `This action returns a #${id} cat`;
    }

}
