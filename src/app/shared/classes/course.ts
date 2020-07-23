import { Student } from './student';
import { Teacher } from './teacher';
import { Chapter } from './chapter';

export class Course {

id?: number;
students: Student[];
teachers: Teacher[];
chapters: Chapter[];

name: string;
constructor(){}

}


