import { Course } from './course';

export class User {


  public id?: number;
  public role: 'admin' | 'client';
  public lastName: string;
  public firstName: string;
  public email: string;
  public birthday: Date;
  public streetNumber: number;
  public streetName: string;
  public cityName: string;
  public cityCode: string;
  public phoneNumber: string;
  public password: string;

  public courses: Course[];
  constructor() {


  }
}
