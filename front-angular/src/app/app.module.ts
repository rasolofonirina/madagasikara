import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FokontanyComponent } from './fokontany/fokontany.component';
import { HomeComponent } from './home/home.component';
import { KaominaComponent } from './kaomina/kaomina.component';
import { DistrikaComponent } from './distrika/distrika.component';
import { FaritraComponent } from './faritra/faritra.component';
import { FaritanyComponent } from './faritany/faritany.component';

@NgModule({
  declarations: [
    AppComponent,
    FokontanyComponent,
    HomeComponent,
    KaominaComponent,
    DistrikaComponent,
    FaritraComponent,
    FaritanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'fokontany', component: FokontanyComponent },
      { path: 'kaomina', component: KaominaComponent },
      { path: 'distrika', component: DistrikaComponent },
      { path: 'faritra', component: FaritraComponent },
      { path: 'faritany', component: FaritanyComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
