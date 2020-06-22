import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { GLOBAL } from '../../services/global'
import { UserService } from '../../services/user.service'
import { Artist } from 'src/app/models/artist'
import { ArtistService } from '../../services/artist.service'
import { Headers } from '@angular/http';



@Component({
  selector: 'app-artist-add',
  templateUrl: './artist-add.component.html',
  styleUrls: ['./artist-add.component.css'],
  providers: [UserService, ArtistService]
})
export class ArtistAddComponent implements OnInit {

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
    private _artistService: ArtistService
  ) {

    this.titulo = "Crear un nuevo Artista";
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.artist = new Artist('', '', '','');
    this.is_edit=false;
  }
  ngOnInit(): void {
    console.log('artist-add.component cargando...');
  }
  onSubmit() {
    this._artistService.addArtist(this.token, this.artist).subscribe(
      response => {
        if (!response.artist) {
          alert('error en el servidor')
        } else {
          this.artist = response.artist;
          this.alertMessage="El artista se creó con exito"
          this._router.navigate(['/edit-artist/'+response.artist._id]);
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
  fileChangeEvent(event){

  }
}
