import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchtext'
})
export class SearchtextPipe implements PipeTransform {

  transform(value: any, args: any):any {
  
    console.log('value',value);
    console.log('args',args);
   if(!value){
    return null;
   }
    if(!args){
        return value;
    }
    args = args.toLowerCase();
    return value.filter((item:any)=>{
    return  JSON.stringify(item).toLowerCase().includes(args);
    })
  }

}
