import { Injectable } from '@angular/core';
import {Http,Response,Headers, RequestOptions} from '@angular/http';
import {map} from 'rxjs/operators'; 
import { GLOBAL } from "./global"; 
import {Artist} from '../models/artist'
@Injectable({
  providedIn: 'root'
})
export class ArtistService {  
  public url:string;

  constructor(private _http:Http) 
  {this.url=GLOBAL.url; }

  getArtists(token,page){
    let headers = new Headers({'Content-Type':'application/json',
                                'Authorization':token});
    let option = new RequestOptions({headers:headers});
    return this._http.get(this.url+'artists/'+page,option).
     pipe(map(res=>res.json()));

  }
  getArtist(token,id){
    let headers = new Headers({'Content-Type':'application/json',
                                'Authorization':token});
    let option = new RequestOptions({headers:headers});
    return this._http.get(this.url+'artist/'+id,option).
     pipe(map(res=>res.json()));

  }

  addArtist(token,artist:Artist){
    let params = JSON.stringify(artist);
    let headers = new Headers({'Content-Type':'application/json',
                                'Authorization':token});
    return this._http.post(this.url+'artist',params,{headers:headers}).pipe(map(res=>
      res.json()
    ));
  }
  updateArtist(token,id:string,artist:Artist){
    let params = JSON.stringify(artist);
    let headers = new Headers({'Content-Type':'application/json',
                                'Authorization':token});
    return this._http.put(this.url+'artist/'+id,params,{headers:headers}).pipe(map(res=>
      res.json()
    ));  
  }
  deleteArtist(token,id){
    let headers = new Headers({'Content-Type':'application/json',
                                'Authorization':token});
    let option = new RequestOptions({headers:headers});
    return this._http.delete(this.url+'artist/'+id,option).
     pipe(map(res=>res.json()));

  }

  

}
