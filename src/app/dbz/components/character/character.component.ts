import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { first } from 'rxjs';

@Component({
  selector: 'dbz-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

   @Output()
   public onNewCharacter: EventEmitter<Character> = new EventEmitter();

   public character: Character = {
      name: 'Fuck',
      power: 1
   }

   public emitCharacter(): void
   {
      console.log('1.')
      console.log(this.character)
      if (this.character.name.length <= 0) return;

      console.log('2.')
      this.onNewCharacter.emit(this.character);

      console.log('3.')
      this.character.name = '';
      this.character.power = 0;
   }

}
