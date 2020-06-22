import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { ArtistAddComponent } from './components/artist-add/artist-add.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistEditComponent } from './components/artist-edit/artist-edit.component';
import { ArtistDetailComponent } from './components/artist-detail/artist-detail.component';
import { AlbumAddComponent } from './components/album-add/album-add.component';
import { AlbumEditComponent } from './components/album-edit/album-edit.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { AddSongComponent } from './components/add-song/add-song.component';
import { EditSongComponent } from './components/edit-song/edit-song.component';
const routes: Routes = [
  
  {path:'',component:HomeComponent},
  {path:'artist/:page',component:ArtistListComponent},
  {path:'create-artist',component:ArtistAddComponent},
  {path: 'edit-artist/:id',component:ArtistEditComponent},
  {path:'artistt/:id',component:ArtistDetailComponent},
  {path:'create-album/:artist',component:AlbumAddComponent},
  {path:'edit-album/:id',component:AlbumEditComponent},
  {path:'album/:id',component:AlbumDetailComponent},
  {path:'create-song/:album',component:AddSongComponent},
  {path:'edit-song/:id',component:EditSongComponent},
  {path:'mis-datos',component:UserEditComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
