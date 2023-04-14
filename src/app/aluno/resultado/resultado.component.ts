import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  conduta: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params: any) => params['id'])
      ).subscribe(conduta => this.conduta = conduta);
  }

}
