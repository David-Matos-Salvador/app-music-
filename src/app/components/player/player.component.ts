import { Component, OnInit } from '@angular/core';
import {Song} from '../../models/song';
import{GLOBAL}from     '../../services/global';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  public url:string;
  public song;
  constructor() 
  {
    this.url=GLOBAL.url;
    
   }

  ngOnInit(): void {
    const SONG=JSON.parse(localStorage.getItem('sound_song'));

    if(SONG){      
     this.song=SONG;
     console.log(this.song);
    }
    else{
      this.song=  new Song("1","","","","");
    }
  
  }

}
