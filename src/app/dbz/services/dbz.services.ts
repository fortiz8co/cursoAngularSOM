import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { v4 as uuid } from 'uuid';

@Injectable({
    providedIn: "root"
})
export class DbzService{
    constructor() {}

    public characters: Character[] = [{
        id: uuid(),
        name: "Krilin",
        power: 1000
    },{
        id: uuid(),
        name: "Goku",
        power: 9500
    }  
    ];

    public onNewCharacter(pcharacter: Character): void {

        const newCharacter: Character = {  
            id: uuid(),
            ...pcharacter
        }
        this.characters.push(newCharacter);
    }

    public onDelete(pindex: number): void {
        this.characters.splice(pindex);
    }

    public deleteCaracterById(id: string){
        this.characters = this.characters.filter(characters => characters.id !== id );
    }
}