import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { SongService } from '../../services/song.service'
import { AlbumService } from '../../services/album.service'
import { Song } from 'src/app/models/song';
@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css'],
  providers:[UserService,AlbumService,SongService]
})
export class AddSongComponent implements OnInit {
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
    private _songService:SongService
    
  ) {

    this.titulo = "Crear Nuevo Cancion para el album: ";
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.song=new Song("1","","","","");
    this._isEdit=false;
    
 

  } 

  ngOnInit(): void {
    console.log("song-add.component.ts cargado");
    this.getName();
    
  }
  private getName(){
    this._route.params.forEach((params:Params)=>{
      let album_id=params['album'];
      this.song.album=album_id;
    this._albumService.getAlbum(this.token, album_id).subscribe(
      res => {
        if (!res.album) {
          console.log(res);
        } else {
          this.album = res.album.title; 
          
          console.log(this.album);
          
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
  onSubmit(){
    console.log(this.song);   
    
     this._songService.addSong(this.token, this.song).subscribe(
      res => {
        if (!res.song) {
          this.alertMessage = "Error en el servidor ";
        } else {
          this.alertMessage = "¡La canción se ha creado correctamente !"; 
          this.song=res.song;
          this._router.navigate(['/edit-song',res.song._id],);
        }
      }, err => {
        let alertMessage = <any>err;
        if (alertMessage != null) {
          let body = JSON.parse(err._body);
          this.alertMessage = body.message;
          console.log(err);
        }
      })
  }

  fileChangeEvent(file){

  }

}
