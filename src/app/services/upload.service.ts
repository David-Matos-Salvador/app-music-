import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { GLOBAL } from "./global";
import { Artist } from '../models/artist'
@Injectable({
    providedIn: 'root'
})
export class UploadService {
    public url: string;

    constructor(private _http: Http) {
    this.url = GLOBAL.url;
    }

  
    makeFileRequest(url:string,params:Array<string>,files:Array<File>,token:string,name:string){       
    return new Promise(function (resolve,reject) {
        let formdata:any = new FormData();
        let xhr = new XMLHttpRequest();
        for (let i = 0; i < files.length; i++) {
        formdata.append(name,files[i],files[i].name);    
        }
        xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
            } else {
            reject(xhr.response);
            }
        }
        }
        xhr.open('POST',url,true);
        xhr.setRequestHeader('Authorization',token);
        xhr.send(formdata);     
        
    })

    }
}