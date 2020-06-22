import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
;
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { Artist } from 'src/app/models/artist';
import { Album } from 'src/app/models/album';
import { AlbumService } from '../../services/album.service';
import { UploadService } from '../../services/upload.service';
@Component({
  selector: 'app-album-edit',
  templateUrl: '../album-add/album-add.component.html',
  styleUrls: ['./album-edit.component.css'],
  providers:[UserService,AlbumService,UploadService]
})
export class AlbumEditComponent implements OnInit {
  public titulo: string;
  public artist: Artist;
  public identity;
  public token;
  public url: string;
  public alertMessage: string;
  public album:Album;
  public is_edit:boolean


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private  _albumService:AlbumService,
    private _UploadService:UploadService
  ) {

    this.titulo = "Editar Album";
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.album = new Album('','','',  2020,'','');
    this.is_edit=true;

  }

  ngOnInit(): void {
    console.log('album.edit.component.ts esta cargando ...');
    
    //conseguir el album
    this.getAlbum();

  }
  getAlbum(){
    this._route.params.forEach((params:Params)=>{
         let id= params['id'];
         this._albumService.getAlbum(this.token,id).subscribe(
          res => {
            if (!res.album) {
              this._router.navigate(['/']);
            } else {
              this.album=res.album;
            }
          }, err => {
            let alertMessage = <any>err;
            if (alertMessage != null) {
              let body = JSON.parse(err._body);              
              console.log(err);
            }
          }
         )
    });
  }
  onSubmit() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      this._albumService.editAlbum(this.token, id, this.album).subscribe(
        res => {
          if (!res.album) {
            this.alertMessage = "Error en el Servidor"
          } else {
            this.alertMessage = "¡El album  se ha actualizado  correctamente!";
            console.log(this.alertMessage);
            // subir la imagen al servidor
            if (!this.filesToUpload) {
              //redirigir
              this._router.navigate(['/artistt', res.album.artist]);
            } else {
              this._UploadService.makeFileRequest(this.url + 'upload-img-album/' + id, [], this.filesToUpload, this.token, 'image')
                .then((result) => {
                  this._router.navigate(['/artistt', res.album.artist]);

                },
                  (error) => {
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
        }
      )
    })

  }
  public filesToUpload:Array<File>;
  
  fileChangeEvent(fileInput:any){
    this.filesToUpload=<Array<File>>fileInput.target.files;
  }


}
