import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
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

}