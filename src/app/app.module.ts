import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JurosSimplesComponent } from './juros-simples/juros-simples.component';
import { JurosCompostosComponent } from './juros-compostos/juros-compostos.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'juros-compostos', component: JurosCompostosComponent },
      { path: 'juros-simples', component: JurosSimplesComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    JurosSimplesComponent,
    JurosCompostosComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
