import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals = [];

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) { 
    this.route.params.subscribe(res => console.log(res.id+" "+res.name));
  }

  ngOnInit() {
    this._data.goalObs.subscribe(res => this.goals = res);
    
  }

  sendMeHome(){
    this.router.navigate(['']);
  }
}
