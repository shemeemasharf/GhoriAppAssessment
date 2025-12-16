import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageContainerComponent } from './features/landing-page-container/landing-page-container.component';
import { ShopComponent } from './features/shop/shop.component';

const routes: Routes = [
  {path: '', component:LandingPageContainerComponent },
   {path: 'shop', component:ShopComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
