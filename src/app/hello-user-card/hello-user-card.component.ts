import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-user-card',
  templateUrl: './hello-user-card.component.html',
  styleUrls: ['./hello-user-card.component.css']
})
export class HelloUserCardComponent implements OnInit {

  userName:string = "Jackass"

  constructor() { }

  ngOnInit(): void {
  }

}
