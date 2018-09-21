import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const usuarios= [
        {name: 'Nicolas' , psw: '1234',telefono:'44567894',mail:'nicolas.larsen@gmail.com',fnac:'05/11/1996'},
        {name: 'Diego' , psw: '1235',telefono:'445672394',mail:'nicolas.larsen@gmail.com',fnac:'05/11/1996'},
        {name: 'Alejandro' , psw: '1236',telefono:'44127894',mail:'nicolas.larsen@gmail.com',fnac:'05/11/1996'}
        ];
        return {usuarios};
  }
}