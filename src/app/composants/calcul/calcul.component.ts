import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {
  oper: string = "";
  varUn: number = 0;
  varDeux: number = 0;
  resultat: string = "0";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe ((res) => {
      this.oper=res.get('op') ?? "";
      this.varUn = Number (res.get('varUn') ?? 0);
      this.varDeux = Number (res.get('varDeux') ?? 0);
      switch (this.oper){
        case "plus":
          this.resultat=""+(this.varUn+this.varDeux);
          break;
        case "moins":
          this.resultat=""+(this.varUn-this.varDeux);
          break;
        case "fois":
          this.resultat=""+(this.varUn*this.varDeux);
          break;
        case "divise":
          if(this.varDeux!=0){
            this.resultat=""+(this.varUn/this.varDeux);
          }
          else{
            this.resultat="Division par 0 interdite!";
          }
          break;
        default:
          this.resultat="Operateur incorrect!";
          break;
      }
    })
  }

}
