import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import {RouterLink} from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,OnDestroy,DoCheck{


  ngDoCheck(): void {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

}
