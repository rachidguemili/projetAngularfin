import { Student } from '../../classes/student';
import { ParseErrorLevel } from '@angular/compiler';
import { Meet } from '../../classes/meet';
import { Level } from '../../classes/level/level';

export class Classe {

  id?: number;
meetList: Meet[];
studentList: Student[];
name: string;
level: Level;

constructor(){

}
}
