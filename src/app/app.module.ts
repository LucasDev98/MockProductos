//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
//Components
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { PaginationComponent } from './components/shared/pagination/pagination.component';
import { PaginatorPipe } from './pipes/paginator.pipe';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { SearcProductComponent } from './components/searc-product/search-product.component';
import { CardComponent } from './components/shared/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PaginationComponent,
    PaginatorPipe,
    SpinnerComponent,
    SearcProductComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
