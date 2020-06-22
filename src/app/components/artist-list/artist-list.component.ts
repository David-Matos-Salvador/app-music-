import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router'

import	{GLOBAL} from '../../services/global'
import{UserService} from '../../services/user.service'
import{ArtistService} from '../../services/artist.service'
import {Artist} from '../../models/artist'

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css'],
  providers:[UserService,ArtistService]
})
export class ArtistListComponent implements OnInit {
  public titulo:string;
  public artists:Array<Artist>;//es lo mismo que Artist[]
  public identity;
  public token;
  public url:string;
  public next_page;
  public prev_page;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _userService:UserService,
    private _artistService:ArtistService) {
      this.titulo="Artista";
      this.identity=this._userService.getIdentity() ;
      this.token=this._userService.getToken();
      this.url=GLOBAL.url;
      this.next_page=1;
      this.prev_page=1;
  }

  ngOnInit(): void {
    console.log(this.identity);
    this.getArtist();
  }
  getArtist(){
    this._route.params.forEach((params:Params)=>{
      let page = +params['page'];// utilizo el mas para comvertir a numero el parametro page
      if (!page) {
        page=1;       
      } else {
        this.next_page=page+1;
        this.prev_page=page-1;
        if (this.prev_page==0) {
          this.prev_page=1;          
        }
        this._artistService.getArtists(this.token,page).subscribe(res=>{
            if (!res.artists) {
              this._router.navigate(['/']);

            } else { 
              this.artists=res.artists;
              console.log(this.artists);
            }
        }, err => {
        let alertMessage = <any>err;
        if (alertMessage != null) {
          let body = JSON.parse(err._body);
          //this.alertMessage = body.message;
          console.log(err);
        }}
        )

      }
    })
  }
  
  public confirmado:string;
  OndeleteConfirm(id){
    this.confirmado=id;
  }
  onCancelArtist(){
    this.confirmado=null;
  }
  onDeleteArtist(id){
    this._artistService.deleteArtist(this.token, id).subscribe(
      res=>{
        if (!res.artist) {
          alert('Error en el servidor');
        } 
          this.getArtist();
        
    }, err => {
      let alertMessage = <any>err;
      if (alertMessage != null) {
        let body = JSON.parse(err._body);
        //this.alertMessage = body.message;
        console.log(err);
      }}
    )
  }

}
