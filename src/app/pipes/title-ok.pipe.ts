import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleOk'
})
export class TitleOkPipe implements PipeTransform {

  transform(film: any): any {

    if(film.title){
      return film.title
    }else if (film.name){
      return film.name
    }else if (film.original_title)
      {return film.original_title
    }else if (film.original_name){
      return film.original_name
    }else {
      return "No title"
    }

  }
}
