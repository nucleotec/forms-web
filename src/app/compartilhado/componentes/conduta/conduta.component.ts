import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-conduta',
  templateUrl: './conduta.component.html',
  styleUrls: ['./conduta.component.css']
})
export class CondutaComponent implements OnInit {
  @Input() conduta: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
