import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { GLOBAL } from '../../services/global'
import { UserService } from '../../services/user.service'
import { Artist } from 'src/app/models/artist'
import { ArtistService } from '../../services/artist.service'
import{UploadService}from '../../services/upload.service'


@Component({
  selector: 'app-artist-edit',
  templateUrl: '../artist-add/artist-add.component.html',
  styleUrls: ['./artist-edit.component.css'],
  providers:[UserService,ArtistService,UploadService]
})
export class ArtistEditComponent implements OnInit {

  public titulo: string;
  public artist: Artist;
  public identity;
  public token;
  public url: string;
  public alertMessage: string;
  public is_edit:boolean;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _UploadService: UploadService,
    private _artistService: ArtistService
  ) {

    this.titulo = "Editar  Artista";
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.artist = new Artist('', '', '','');
    this.is_edit=true;
  }
  ngOnInit(): void {
    console.log('artist-edit.component cargando...');
    this.getArtist();
  }
  getArtist(){
    this._route.params.forEach((params:Params)=>{
      let id = params['id'];
      this._artistService.getArtist(this.token,id).subscribe(
        res=>{
          if (!res.artist) {
            console.log(res);
          } else {
            this.artist= res.artist;
          }
      }, err => {
        let alertMessage = <any>err;
        if (alertMessage != null) {
          let body = JSON.parse(err._body);
          //this.alertMessage = body.message;
          console.log(err);
        }})
    });

  }
  onSubmit() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      this._artistService.updateArtist(this.token, id, this.artist).subscribe(
        response => {
         
          if (!response.artistUpdate) {
            alert('error en el servidor')
            
          } else {
            //this.artist = response.artist;
            this.alertMessage = "El artista se actualizado con exito"
            //subir la imagen del artista
            if (!this.filesToUpload) {
              this._router.navigate(['/artistt',response.artistUpdate._id]);
              
            } else {
              
            this._UploadService.makeFileRequest(this.url+'upload-img-artist/'+id, [],this.filesToUpload,this.token,'image')
            .then((result)=>{
              this._router.navigate(['/artistt',response.artistUpdate._id]);

            },(error)=>{
              console.log(error);
            });

            }
          }

        }, err => {
          let alertMessage = <any>err;
          if (alertMessage != null) {
            let body = JSON.parse(err._body);
            this.alertMessage = body.message;
            console.log(err);
          }
        })
    });
  }
  public filesToUpload:Array<File>;
  fileChangeEvent(fileInput:any){
    this.filesToUpload=<Array<File>>fileInput.target.files;

  }
}