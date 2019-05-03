import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  equipe = {
    nom: 'psg',
    src: 'oe',
    pts: '1'
  }
  public items: Array<{ nom: string; src: string; pts: number; }> = [];
  constructor(private router: Router, private dataService: DataService) {
    this.items = [
      {nom : 'PSG' , src : '../../assets/img/PSG.jpg', pts : 32},
      {nom : 'Lille' , src : '../../assets/img/Lille.png', pts : 28},
      {nom : 'Lyon' , src : '../../assets/img/Lyon.png', pts : 27},
      {nom : 'Saint Etienne' , src : '../../assets/img/ASSE.png', pts : 22},
      {nom : 'Montpellier' , src : '../../assets/img/Montpellier.png', pts : 21},
      {nom : 'Strasbourg' , src : '../../assets/img/Strasbourg.jpg', pts : 19},
      {nom : 'Rennes' , src : '../../assets/img/Rennes.png', pts : 16}];
  }

  openDetailsWithService(nom, src, pts) {
    this.equipe["nom"] = nom;
    this.equipe["src"] = src;
    this.equipe["pts"] = pts;
    this.dataService.setData(42, this.equipe);
    this.router.navigateByUrl('/details/42');
  }


  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
