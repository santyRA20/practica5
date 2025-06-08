import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dtos/create-cat.dto';
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

    // metodo para guardar el nuevo registro
    create(cat: CreateCatDto): Cat {
        const newCat = {
            id: (this.cats.findLast((item) => item.id > 0)?.id || 1) +1,...cat,
        };

        this.cats.push(newCat);
        return newCat;
    }
    
    update(id: number, cat: UpdateCatDto){
        const index = this.cats.findIndex(c => c.id === id);
        if (index === -1) {
            return `Gato con ID ${id} no encontrado.`;
        }

        this.cats[index] = { ...this.cats[index], ...cat };
        return `Gato con ID ${id} actualizado correctamente.`;
    }
}
