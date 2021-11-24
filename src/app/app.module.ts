import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExtraOptions, RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];

const config: ExtraOptions = {
  useHash: true,
};


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes,config),
    ProfileModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
