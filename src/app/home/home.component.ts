import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [

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
