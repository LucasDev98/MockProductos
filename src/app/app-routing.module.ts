import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearcProductComponent } from './components/searc-product/search-product.component';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'search/:termino', component: SearcProductComponent },
  { path:' ', component: HomeComponent },
  { path:'**', pathMatch:'full', redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
