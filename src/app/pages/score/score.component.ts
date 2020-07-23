import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amm-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  scores: string[];

  constructor() { }

  ngOnInit(): void {

  }

  // get la liste des scores de l etudiant

}
