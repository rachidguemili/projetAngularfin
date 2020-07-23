import { Course } from './course';
import { Meet } from './meet';

export class Chapter {


  id?: number;
meets: Meet[];
course: Course;
value: number;
name: string;
constructor(){}
}

