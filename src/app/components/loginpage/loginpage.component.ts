import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  email: string = ''; password: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login()
   { if (this.email === 'admin@admin.com' && this.password === 'admin')
    { this.router.navigate(['/admin']); } 
    else if (this.email === 'sponsor@sponsor.com' && this.password === 'sponsor') 
    { this.router.navigate(['/sponsor']); } 
    else if 
    (this.email === 'organiser@organiser.com' && this.password === 'organiser')
     { this.router.navigate(['/organiser']); } else { alert('Invalid email or password');
     } }
}
