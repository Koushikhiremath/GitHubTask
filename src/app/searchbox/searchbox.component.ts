import { GitService } from './../git.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {

  username:string;
  data:any;
  disp:boolean=false;
  followers:any;
  following:any;
  repo:any;
  load=false;

  constructor(private service:GitService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.load=true;
    this.service.getuser(this.username).subscribe(data => {
      this.data = data;
      this.service.getfollowers(this.data.followers_url).subscribe(res=>{
      
        this.followers=res;
       
      })
        this.service.getfollowings("https://api.github.com/users/"+data.login+"/following").subscribe(response=>
          {
           
            this.following=response;

          })
          this.service.getrepos(this.data.repos_url).subscribe(resp=>
            {
            
              this.repo=resp;
            })

      
      this.load=false;
      this.disp=true;
      
     
      
    })
  }

}
