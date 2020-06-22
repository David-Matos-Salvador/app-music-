import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { SongService } from '../../services/song.service'
import { AlbumService } from '../../services/album.service'
import { UploadService } from '../../services/upload.service'
import { Song } from 'src/app/models/song';
@Component({
  selector: 'app-edit-song',
  templateUrl: '../add-song/add-song.component.html',
  styleUrls: ['./edit-song.component.css'],
  providers:[UserService,AlbumService,SongService,UploadService]
})
export class EditSongComponent implements OnInit {
  public titulo: string; 
  public song :Song;
  public identity;
  public token;
  public url: string;
  public alertMessage: string;
  public album:string; 
  public _isEdit:boolean;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService, 
    private  _albumService:AlbumService,
    private _songService:SongService,
    private _UploadService:UploadService 
    
  ) {

    this.titulo = "Editar Cancion ";
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.song=new Song("1","","","","");
    this._isEdit=true;
    this.album="";
 

  } 

  ngOnInit(): void {
   this.getSong();
  }
  getSong(){
    this._route.params.forEach((params:Params)=>{
    let id=params['id'];
    this._songService.getSong(this.token,id).subscribe(
      res=>{
        if (!res.song) {
          console.log(res);
        } else {
          this.song=res.song;
         
        }
        
      }
      ,err => {
        let alertMessage = <any>err;
        if (alertMessage != null) {
          let body = JSON.parse(err._body);
          this.alertMessage = body.message;
          console.log(err);
        }
      });  
  });
  }
  onSubmit(){

    this._route.params.forEach((params:Params)=>{
      let id=params['id'];
    this._songService.editSong(this.token,id, this.song).subscribe(
      res => {
        if (!res.song) {
          console.log(res);
        } else {
          
          this.alertMessage = "¡La canción se ha actualizado correctamente !"; 
          
          
          //subir el fichero de audio
          if (!this.filesToUpload) {
            console.log(res);
            this._router.navigate(['/album', res.song.album]);
           
          } else {
            this._UploadService.makeFileRequest(this.url + 'upload_song/' + id, [], this.filesToUpload, this.token, 'file')
                .then((result) => {
                  this._router.navigate(['/album', res.song.album]);

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
      })
    });   

  }
  public filesToUpload;
   fileChangeEvent(fileInput:any){
      this.filesToUpload=<Array<File>>fileInput.target.files;
  }

}
