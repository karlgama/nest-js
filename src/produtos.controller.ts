import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {
  @Get()
  obterTodos(): string {
    return 'lista de produtos teste';
  }
  @Get('/:id')
  obterUm(@Param() params): string {
    return `retorna algo ${params.id}`;
  }
  @Post()
  criar(@Body() produto): string {
    console.log(produto);
    return 'criar';
  }
  @Put('/:id')
  alterar(@Param() params, @Body() produto): string {
    console.log(produto);
    return 'alterado';
  }

  @Delete('/:id')
  apagar(@Param() params): string {
    return 'deletado';
  }
}
