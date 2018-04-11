import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CarritoComponent } from './carrito/carrito.component';
import { CarritoService } from './carrito.service';

const appRoutes: Routes = [
  {
    path: 'home',
    component: CoursesListComponent
  },
  {
    path: 'details/:id',
    component: ProductDetailComponent
  },
  {
    path: 'carrito',
    component: CarritoComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    CoursesListComponent,
    ProductDetailComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot()
  ],
  providers: [RouterModule, CookieService, CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
