import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output() 
  public onDelete = new EventEmitter<string>();

  @Input()
  public characterList: Character[] = [{
    name: "Trunk",
    power: 10
  }]


  onDeleteCharacter(index?: string): void {
    if (!index) return;
    this.onDelete.emit(index);
  }


}
