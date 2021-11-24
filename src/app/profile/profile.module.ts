import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

  ],
  declarations: [
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    AboutComponent,

  ],
  providers: [


  ]
})
export class ProfileModule { }
