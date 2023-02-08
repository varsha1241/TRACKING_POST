import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }
  
  ngOnInit(): void 
  {
    localStorage.clear();
    sessionStorage.clear();
    Swal.fire('Logged out successfully!',"", 'success');
    this.router.navigate(['/login']);
  }

}
