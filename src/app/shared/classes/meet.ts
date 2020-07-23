import { Teacher } from './teacher';
import { Classe } from '../class/classe/classe';
import { Chapter } from './chapter';

export class Meet {

  id?: number;
classesList: Classe[];
chapter: Chapter;
subject: string;
date: Date;
teacher: Teacher;

}
