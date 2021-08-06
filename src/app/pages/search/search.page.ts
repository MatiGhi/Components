import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albumes: any[] = [];
  textoBuscar = '';

  constructor( private dataService: DataService ) { }

  ngOnInit() {

    this.dataService.getAlbumes().subscribe( (albumes) => {
      this.albumes = albumes;
    });

  }

  onSearchChange( event ){
    // console.log(event.detail.value);
    this.textoBuscar = event.detail.value;
  }

}
