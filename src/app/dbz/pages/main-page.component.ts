import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.services';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    constructor(public dbzServices: DbzService ){

    }

    get characters() : Character[] {
        return [...this.dbzServices.characters];
    }

    onDeleteCharacter(id: string): void {
        this.dbzServices.deleteCaracterById(id);
    }

    onNewCharacter(pcharacter: Character): void {
        this.dbzServices.onNewCharacter(pcharacter);
    }

}