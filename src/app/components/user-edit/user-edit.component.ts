import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { User } from 'src/app/models/user';
import { promise } from 'protractor';
import {GLOBAL} from '../../services/global'

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers:[UserService]
})
export class UserEditComponent implements OnInit {
  public titulo: string;
  public user: User;
  public identity;
  public token;
  public alertUpdate;
  public url:string;


  constructor(
    private _userService: UserService
  ) {
    this.titulo = "Actualizar mis datos ";   

    //LocalStorage
    this.identity= this._userService.getIdentity();
    this.token=this._userService.getToken();
    this.user = this.identity;
    this.url=GLOBAL.url;
  }

  ngOnInit(): void {
    console.log('user-edit.component.ts cargadi')
  }
  onSubmit(){
     
      this._userService.update_user(this.user).subscribe(res=>{
        if (!res.user) {
          this.alertUpdate="El usuario no se ha actualizado";
        } else {

          //this.user = res.user; esto lo malogra
          localStorage.setItem('identity', JSON.stringify(this.user));
          document.getElementById('nameandsurname').innerHTML = this.user.name + this.user.surname;
          if (!this.filesToUpload) {
            //redirrecion
          }
          else {
            this.makeFileRequest(this.url + 'upload-image/' + this.user._id, [], this.filesToUpload)
              .then((result: any) => {
                this.user.image = result.image;
                localStorage.setItem('identity', JSON.stringify(this.user));
                let image_path=this.url+'get-image/'+this.user.image;
                document.getElementById('img-logged').setAttribute('src',image_path);
                
                console.log(this.user);
              })
          }
          this.alertUpdate = "El usuario se ha actualizado correctamente";
        }  

      },err=>{
        let alertUpdate = <any>err;
      if (alertUpdate!=null) {
        let body=JSON.parse(err._body);
        this.alertUpdate=body.message;
        console.log(err);
      }
      })
  }

  public filesToUpload:Array<File>;

  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }

  makeFileRequest(url:string,params:Array<string>,files:Array<File>){
    let token =this.token;

    return new Promise(function (resolve,reject) {
      let formdata:any = new FormData();
      let xhr = new XMLHttpRequest();
      for (let i = 0; i < files.length; i++) {
        formdata.append('image',files[i],files[i].name);    
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      }
      xhr.open('POST',url,true);
      xhr.setRequestHeader('Authorization',token);
      xhr.send(formdata);     
      
    })

  }


}
