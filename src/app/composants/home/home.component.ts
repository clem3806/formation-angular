import { Component, OnInit } from '@angular/core';
import { Stagiaire } from 'src/app/interfaces/stagiaire';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  title = 'formation-angular';
  tab: number[] = [2, 5, 3, 8];
  moyennes: number[] = [12,5,16,18]
  stagiaires : Stagiaire[] = [
    { num: 100, nom: "wick", prenom: "john" },
    { num: 200, nom: "dalton", prenom: "jack" },
    { num: 300, nom: "doe", prenom: "joe" },
    { num: 400, nom: "maggio", prenom: "sophie" },
  ];
  direBonjour() {
    alert('bonjour');
  }
  ngOnInit(): void {
  }

}