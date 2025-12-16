import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LandingPageContainerComponent } from './features/landing-page-container/landing-page-container.component';
import { NavBarComponent } from './features/nav-bar/nav-bar.component';

import { HeroComponent } from './features/hero/hero.component';
import { CollectionsComponent } from './features/collections/collections.component';
import { JustInComponent } from './features/just-in/just-in.component';
import { StyleMomentComponent } from './features/style-moment/style-moment.component';
import { MostLovedComponent } from './features/most-loved/most-loved.component';
import { CraftedWithCareComponent } from './features/crafted-with-care/crafted-with-care.component';
import { FeaturedQuotesComponent } from './features/featured-quotes/featured-quotes.component';
import { PromotionComponent } from './features/promotion/promotion.component';
import { TestimonialsComponent } from './features/testimonials/testimonials.component';
import { StayConnectedComponent } from './features/stay-connected/stay-connected.component';
import { FooterComponent } from './features/footer/footer.component';
import { ShopComponent } from './features/shop/shop.component';



@NgModule({
  declarations: [
    LandingPageContainerComponent,
    NavBarComponent,
    ShopComponent,
    HeroComponent,
    CollectionsComponent,
    JustInComponent,
    StyleMomentComponent,
    MostLovedComponent,
    CraftedWithCareComponent,
    FeaturedQuotesComponent,
    PromotionComponent,
    TestimonialsComponent,
    StayConnectedComponent,
    FooterComponent,


  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
  ]
})
export class CoreModule { }
