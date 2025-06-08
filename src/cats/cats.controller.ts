import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Patch } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dtos/create-cat.dto';
import { UpdateCatDto } from './dtos/update-cat.dto';


@Controller('cats')
export class CatsController {
    // atributo inicializado con una instancia de CastService
    constructor(private readonly catsService: CatsService){

    }


    @Get()
    allCats(): Cat[]{
        return this.catsService.allCats();
    }

    @Get(`:id`)
    getById(@Param(`id`, new ParseIntPipe()) id: number ): Cat | undefined{
        console.log(typeof id);

        return this.catsService.getById(id);
    }

    @Post() 
    create(@Body() createCatDto: CreateCatDto) : Cat{
        console.log(createCatDto);

        return this.catsService.create(createCatDto);
    }

    @Patch(':id') update( @Param('id', new ParseIntPipe()) id: number, @Body() updateCatDto: 
    UpdateCatDto ): string {
    return this.catsService.update(id, updateCatDto);
  }

}