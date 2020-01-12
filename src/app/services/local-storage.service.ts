import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
// key that is used to access the data in local storageconst STORAGE_KEY = 'local_todolist';
@Injectable()
export class LocalStorageService {
     anotherTodolist = [];
     STORAGE_KEY :string = 'local';
     constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
     public store(symbol: string,checked: boolean): void {
          
          // get array of tasks from local storage
          const symbolList = this.storage.get(this.STORAGE_KEY) || [];
          
          let foundIndex = symbolList.findIndex(objeto => objeto.symbol == symbol);
          if(foundIndex!='-1')
          {
            symbolList[foundIndex].checked = checked;
          }else{
            symbolList.push({
              symbol: symbol,
              checked: checked 
          });
          }      
          

          // insert updated array to local storage
          this.storage.set(this.STORAGE_KEY, symbolList);
          console.log(this.storage.get(this.STORAGE_KEY) || 'LocaL storage is empty');
     }
     public get(symbol: string): any {
      const symbolList = this.storage.get(this.STORAGE_KEY) || [];
          
          let foundIndex = symbolList.findIndex(objeto => objeto.symbol == symbol);
          if(foundIndex!='-1')
          {
           return symbolList[foundIndex];
          }else{
            return false;
          }      
    }
    public getAll()
    {
      const symbolList = this.storage.get(this.STORAGE_KEY) || [];
      if(symbolList)
      {
       return symbolList;
      }else{
        return false;
      }     
    }
}