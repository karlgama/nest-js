import { LivrosService } from './livros.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Livro } from './livro.model';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  async obterTodos(): Promise<Livro[]> {
    return this.livrosService.obterTodos();
  }
  @Get('/:id')
  async obterUm(@Param() { id }): Promise<Livro> {
    return this.livrosService.obterUm(id);
  }
  @Post()
  async criar(@Body() livro: Livro) {
    this.livrosService.criar(livro);
  }
  @Put('/:id')
  async alterar(
    @Param() params,
    @Body() livro: Livro,
  ): Promise<[number, Livro[]]> {
    return this.livrosService.alterar(livro);
  }

  @Delete('/:id')
  async apagar(@Param('id') id: number) {
    this.livrosService.apagar(id);
  }
}
