import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service'
import {GLOBAL} from './services/global';
import {Router,ActivatedRoute,Params} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  public title = 'App-Music';
  public user: User;
  public user_register: User;
  public identity;
  public token;
  public errormessage:string;
  public alertRegister:string;
  public url:string;

  constructor(private _route:ActivatedRoute,
    private _router:Router,
    private _userService: UserService) {
    this.user = new User('', '', '', '', '', 'ROLE_USER', '');
    this.user_register =new User('', '', '', '', '', 'ROLE_USER', '');
    this.url=GLOBAL.url;
  }


  ngOnInit() {
       this.identity= this._userService.getIdentity();
       this.token=this._userService.getToken();
      
  }
  onSubmitRegister(){
    this._userService.register(this.user_register).subscribe(
      res=>{
        let user = res.user;
        this.user_register=user;
        if (!user._id) {
          
          this.alertRegister="Error al registrar el usuario";     
        }
        else{
          this.alertRegister='El registro se ha realizado con exitó, identificate con tu nueva cuenta :)';
          console.log(this.user_register);
          this.user_register =new User('', '', '', '', '', 'ROLE_USER', '');
        }
      }),err => {
      let errormessage = <any>err;
      if (errormessage!=null) {
        let body=JSON.parse(err._body);
        this.alertRegister=body.message;
        console.log(err);
      }
    }
    
    
  }
  onSubmit() {
    
    this._userService.signup(this.user).subscribe(res => {
      let identity = res.user;
      this.identity = identity;
      if (!this.identity._id) {
        alert('El usuario no esta correctamente identificado')
      } else {
        //crear el elemento en el localstorage para la sesion del usuario
        localStorage.setItem('identity',JSON.stringify(identity));

        //conseguir el token para enviar a cada  peticion http
        
          this._userService.signup(this.user,'true').subscribe(res => {
            let token = res.token;
            this.token = token;            
            if (this.token.length<=0) {
              alert('El token no se ha generado correctamente')
            } else {
              //crear el elemento en el localstorage para tener el token disponible
              localStorage.setItem('token', token);   
              this.user = new User('', '', '', '', '', 'ROLE_USER', '');          
              
            }
      
          }, err => {
            let errormessage = <any>err;
            if (errormessage!=null) {
              let body=JSON.parse(err._body);
              this.errormessage=body.message;
              console.log(err);
            }
          });
        }

    }, err => {
      let errormessage = <any>err;
      if (errormessage!=null) {
        let body=JSON.parse(err._body);
        this.errormessage=body.message;
        console.log(err);
      }
    });

  }

  logout(){
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    localStorage.clear();
    this.identity=null;
    this.token=null;
    this.errormessage=null;
    this.alertRegister=null;
    this._router.navigate(['/']);

  }


}
