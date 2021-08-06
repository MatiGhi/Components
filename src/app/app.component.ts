import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Observable } from 'rxjs';

import { Componente } from '../app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes: Observable<Componente[]>;

  constructor(
    private platform: Platform,
    private dataService: DataService
  ) {
    this.initializeApp();
  }

  // ngOnInit() {
  //   this.componentes = this.dataService.getMenuOpts();
  // }

  initializeApp() {
    this.platform.ready().then(() => {
      this.componentes = this.dataService.getMenuOpts();
    });
  }


}
