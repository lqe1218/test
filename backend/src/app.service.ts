import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  saveData(data:any[]):string{
     this.create()

    return 'ok'
  }
  create(){

  }
}
