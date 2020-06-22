import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../services/global'
import { UserService } from '../../services/user.service'
import { Album } from 'src/app/models/album'
import { Song } from 'src/app/models/song'
import { AlbumService } from '../../services/album.service'
import { SongService } from '../../services/song.service'
@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers:[UserService,AlbumService,SongService]
})
export class AlbumDetailComponent implements OnInit {
  public titulo: string;  
  public album:Album;
  public song:Song[];
  public identity;
  public token;
  public url: string;
  public alertMessage: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,       
    private _albumService:AlbumService,
    private _songService:SongService
      ) {

    this.titulo = "Detalle  Album";
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
   
  
  }

  ngOnInit(): void {
    console.log("album-detail.component.ts esta funcionando");
    //sacar el album de la bbdd
    this.getAlbum(); 
  }

  getAlbum() {
    
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      this._albumService.getAlbum(this.token, id).subscribe(
        res => {
          if (!res.album) {
            console.log(res);
          } else {
            this.album = res.album; 
            

            // sacar los albunes de los artistas
              
            this._songService.getSongs(this.token,res.album._id).subscribe(
              res => {
                if (!res.songs) {
                  this.alertMessage = "El Album no tiene canciones";
                } else {
                  this.song = res.songs;
                 
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
  onDeleteConfirm(id) {
    this.confirmado = id;
  }
  onCancelSong() {
    this.confirmado = null;
  }
  onDeleteSong(id) {
    this._songService.deleteSong(this.token, id).subscribe(
      res => {
        if (!res.song) {
          alert("Error en el servidor");
        } else {
          this.getAlbum();
        }
      }
      , err => {
        let alertMessage = <any>err;
        if (alertMessage != null) {
          let body = JSON.parse(err._body);
          //this.alertMessage = body.message;
          console.log(err);
        }
      }
    );
  }

  startPlayer(song){    
    const songPlayer=JSON.stringify(song);
    const file_path=this.url+'get_song/'+song.file;
    const image_path=this.url+'get-img-album/'+song.album.image;
    localStorage.setItem('sound_song',songPlayer);
    document.getElementById("mp3-source").setAttribute("src",file_path);
    (document.getElementById("player") as any).load();
    (document.getElementById("player") as any).play();
    document.getElementById("play-song-title").innerHTML=song.name+'&nbsp';
    document.getElementById("play-song-artist").innerHTML='&nbsp'+'Cantante: '+song.album.artist.name;
    document.getElementById("play-image-album").setAttribute("src",image_path ); 
    
  }
}
