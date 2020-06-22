import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
;
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { Artist } from 'src/app/models/artist';
import { Album } from 'src/app/models/album';
import { ArtistService } from '../../services/artist.service'
import { AlbumService } from '../../services/album.service'

@Component({
  selector: 'app-album-add',
  templateUrl: './album-add.component.html',
  styleUrls: ['./album-add.component.css'],
  providers:[UserService,ArtistService,AlbumService]
})
export class AlbumAddComponent implements OnInit {
  public titulo: string;
  public artist: Artist;
  public identity;
  public token;
  public url: string;
  public alertMessage: string;
  public album:Album;
  public is_edit:boolean;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,    
    private _artistService: ArtistService,
    private  _albumService:AlbumService
  ) {

    this.titulo = "Crear Nuevo Album";
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.album = new Album('','', '', 2020,'','');
    this.is_edit=false;

  }
  ngOnInit(): void {
    console.log('album-add.component cargando...');
  }
  onSubmit(){
    this._route.params.forEach((params:Params)=>{
      let  artist_id=params['artist'];
      this.album.artist=artist_id;
      this._albumService.addAlbum(this.token, this.album).subscribe(
        res => {
          if (!res.album) {
            this.alertMessage="Error en el Servidor"
          } else {
            this.alertMessage ="!El album  se ha creado  correctamente";
            this.album=res.album;
            this._router.navigate(['/edit-album',res.album._id]);
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

  fileChangeEvent(file){
    
  }
}
