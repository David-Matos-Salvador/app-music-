import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { GLOBAL } from "./global";
import { Artist } from '../models/artist'
import { Song } from '../models/song';
import { pipe } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SongService {
  public url: string;

  constructor(private _http: Http) { this.url = GLOBAL.url; }

  getSong(token, id: string) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': token
    });
    let option = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'song/' + id, option).pipe(map(res => res.json()));
  }

  getSongs(token,albumId=null) {    
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': token
    });
    let option = new RequestOptions({headers:headers});
    if (albumId==null) {
      return this._http.get(this.url+'songs',option).pipe(map(res=>res.json()));
    } else {
      return this._http.get(this.url+'songs/'+albumId,option).pipe(map(res=>res.json()));
    }
  }

  addSong(token, song: Song) {
    let params = JSON.stringify(song);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': token
    });
    return this._http.post(this.url + 'song', params, { headers: headers }).pipe(map(res =>
      res.json()));
  }
  editSong(token, id: string, song: Song) {
    let params = JSON.stringify(song);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': token
    });
    return this._http.put(this.url + 'song/' + id, params, { headers: headers }).pipe(map(res =>
      res.json()
    ));
  }
  deleteSong(token, id: string) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': token
    });
    let option = new RequestOptions({ headers: headers });
    return this._http.delete(this.url + 'song/' + id, option).pipe(map(res => res.json()));
  }
}
