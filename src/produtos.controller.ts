import { ProdutosService } from './produtos.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Produto } from './produto.model';
@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {}

  @Get()
  obterTodos(): Produto[] {
    return this.produtosService.obterTodos();
  }
  @Get('/:id')
  obterUm(@Param() { id }): Produto {
    return this.produtosService.obterUm(id);
  }
  @Post()
  criar(@Body() produto: Produto) {
    console.log(produto);
    return this.produtosService.criar(produto);
  }
  @Put('/:id')
  alterar(@Param() params, @Body() produto: Produto): Produto {
    console.log(produto);
    return produto;
  }

  @Delete('/:id')
  apagar(@Param() params): void {
    console.log('deletar');
  }
}
