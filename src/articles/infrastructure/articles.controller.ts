import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('Articles')
@ApiTags('Articles')
export class ArticlesController {
  constructor() {
    //this.authService = authService;
  }

  @Get()
  @ApiOperation({ summary: 'Consultar ultimos articulos' })
  async getArticles() {
    return 'Hello Articles!';
  }

  @Get(':id')
  @ApiOperation({ summary: 'Consultar articulo' })
  getArticle(): string {
    return 'Article';
  }
}
