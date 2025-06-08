import { Injectable } from '@nestjs/common';
//import { CreateCatDto } from './dtos/create-cat.dto';
import { UpdateCatDto } from './dtos/update-cat.dto';

@Injectable()
export class CatsService {
    
    cats: Cat[];

    constructor(){
        //crear un cat
        this.cats = [
            {
                id: 1,
                name: "bolita",
                color: "blanco",
            }
        ];
    }

    allCats(): Cat[]{
        return this.cats;
    }

    getById(id: number): Cat | undefined {
        return this.cats.find((cat) => cat.id === id)
    }
    
}
