import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router'

import { GLOBAL } from '../../services/global'
import { UserService } from '../../services/user.service'
import { Artist } from 'src/app/models/artist'
import { Album } from 'src/app/models/album'
import { ArtistService } from '../../services/artist.service'
import { AlbumService } from '../../services/album.service'


@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css'],
  providers:[UserService,ArtistService,AlbumService]
})
export class ArtistDetailComponent implements OnInit {

  public titulo: string;
  public artist: Artist;
  public albums:Album[];
  public identity;
  public token;
  public url: string;
  public alertMessage: string;

  

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,   
    private _artistService: ArtistService,
    private _albumService:AlbumService
      ) {

    this.titulo = "Editar  Artista";
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
   
  
  }
  ngOnInit(): void {
    console.log('artist-detail.component cargando...');
    this.getArtist();
  }
  getArtist() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      this._artistService.getArtist(this.token, id).subscribe(
        res => {
          if (!res.artist) {
            console.log(res);
          } else {
            this.artist = res.artist;

            // sacar los albunes de los artistas
              
            this._albumService.getAlbums(this.token,res.artist._id).subscribe(
              res => {
                if (!res.albums) {
                  this.alertMessage = "Este Artista No tiene Albums";
                } else {
                  this.albums = res.albums;
                  console.log(this.albums);
                }
              }, err => {
                let alertMessage = <any>err;
                if (alertMessage != null) {
                  let body = JSON.parse(err._body);
                  //this.alertMessage = body.message;
                  console.log(err);
                }
              }
              
            )
          }
        }, err => {
          let alertMessage = <any>err;
          if (alertMessage != null) {
            let body = JSON.parse(err._body);
            //this.alertMessage = body.message;
            console.log(err);
          }
        })
    });

  }
  public confirmado;
  OndeleteConfirm(id){
    this.confirmado=id;
  }
  onCancelAlbum(){
    this.confirmado=null;
  } 
  onDeleteAlbum(id){
    this._albumService.deleteAlbum(this.token,id).subscribe(
      res=>{
        if (!res.album) {
          alert("Error en el servidor");
        } 
        this.getArtist();
      },err => {
        let alertMessage = <any>err;
        if (alertMessage != null) {
          let body = JSON.parse(err._body);
          //this.alertMessage = body.message;
          console.log(err);
        }
      }
    );
  }
}
