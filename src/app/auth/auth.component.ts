import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth service/auth.service';
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
  constructor(private router:Router,private authservice:AuthService){}
  ngOnInit(): void {
    //const localdata = localStorage.getItem('signUpUsers');
   this.loadUsers();
    //fetch(this.url).then(res=>res.json()).then(json=>this.signupUsers=json);    
  }
loadUsers() {
    const localdata:any= localStorage.getItem('signUpUsers');
    if(localdata!=null)
       {     
         this.signupUsers = JSON.parse(localdata) ;  
       }
       else{  
        const localdata = this.authservice.getUsers();
        {
          this.authservice.getUsers().subscribe((res:any) => {
            this.signupUsers = res.data;
            localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers))
  
          });
         }
       }
    
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
      const localdata:any= localStorage.getItem('signUpUsers');
      
      if(localdata!=null)
       {     
         this.signupUsers= JSON.parse(localdata)   
       }
       const isUserExists = this.signupUsers.find(x=>x.username==this.loginObj.username && x.password==this.loginObj.password)
       
       if(isUserExists !=undefined)
       {
        localStorage.setItem("currentuser",this.loginObj.username);
        
        this.router.navigateByUrl('/home')
        alert("user logged in");
       }        
        else{
          alert("wrong credentials");
          this.router.navigateByUrl('/login')
          this.loginObj={
            username:'',password:''
          };
        }
    }
    logout(): void {
      this.loginObj = null;
         localStorage.removeItem('currentuser'); 
         this.router.navigateByUrl('/login')
      }

}
