import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filmImage'
})
export class FilmImagePipe implements PipeTransform {

  transform(film: any, poster:boolean = false): any {

    let url = "https://image.tmdb.org/t/p/w500";

    if(poster && film.poster_path){
      return url + film.poster_path
    }

    if(film.backdrop_path){
      return url + film.backdrop_path
    }else if(film.poster_path){
      return url + film.poster_path
    }else{
      return "assets/img/noimage.png"
    }

/* para la galería y las cards me conviene backdrop_path porque es la imagen pequeña y queda mejor así,
para la pagina de cada película y las cards me conviene mas poster_path porque es la grande, por defecto poster está
inicializado en false para que salga pequeño por defecto y no dé error al no mandar poster:loquesea en los pipes
de gallery y cards */

  }

}
