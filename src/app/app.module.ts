import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainSectionComponent } from './layout/main-section/main-section.component';
import { CardListComponent } from './layout/main-section/card-list/card-list.component';
import { CardComponent } from './layout/main-section/card/card.component';
import { FiltersComponent } from './layout/main-section/filters/filters.component';
import { ButtonComponent } from './utility/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './utility/loader/loader.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainSectionComponent,
    CardListComponent,
    CardComponent,
    FiltersComponent,
    ButtonComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
