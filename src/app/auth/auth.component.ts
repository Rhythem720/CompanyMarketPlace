import { useAnimation } from '@angular/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component,  OnInit } from '@angular/core';
import { AuthService } from './auth service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{

    signupUsers:any[]=[];
    url:string='MarketPlace15\src\UserDetails.json'
    signupObj :any={
      username:"",
      email:"",
      password:""
    };

    loginObj :any={
      username:"",
      password:""
    };
  constructor(private authService: AuthService,private router:Router){}
  ngOnInit(): void {
    //const localdata = localStorage.getItem('signUpUsers');
   this.loadUsers();
    //fetch(this.url).then(res=>res.json()).then(json=>this.signupUsers=json);    
  }
loadUsers() {
    const localdata:any= localStorage.getItem('signupUsers');
    if(localdata!=null)
       this.signupUsers=JSON.parse(localdata);
    // this.authService.getUsers().subscribe((res:any) => {
    //   debugger
    //   this.signupUsers = res.data;
    // });
  }
  register():void {
    // this.authService.createUser(this.signupObj).subscribe((res:any) => {
    //   debugger
    //   this.signupUsers.unshift(this.signupObj);  // For demonstration, prepend locally
    // });
        this.signupUsers.push(this.signupObj);
      localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers))
      debugger
      this.signupObj={
        username:'',password:'',email:''
      };
    }
    login():void
    {
      
     // fetch(this.url).then(res=>res.json()).then(json=>this.signupUsers=json);    
     
      //const newPost = { title: 'New Post', body: 'This is a new post.', userId: 1 };  
       const isUserExists = this.signupUsers.find(x=>x.username==this.loginObj.username && x.password==this.loginObj.password)
       if(isUserExists !=undefined)
       {
        localStorage.setItem("currentuser",this.loginObj.username);
        debugger
         this.router.navigate(['home']);  
        alert("user logged in");
       }        
        else{
          alert("wrong credentials");
          this.router.navigate(['']);
          this.loginObj={
            username:'',password:''
          };
        }
    }
    logout(): void {
      this.loginObj = null;
         localStorage.removeItem('currentuser'); 
         this.router.navigate(['/']);
      }

}
