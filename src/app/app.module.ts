import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title-page/title.component';
import { ModalComponent } from './modal-page/modal-page';
import { SearchComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user-interface/user-interface.component';
import { localStorageComponent } from './local-storage/local-storage.component';
import { imagesComponent } from './using-images/image.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { AppTaskComponent } from './app-task/app-task.component';
import { Task2Component } from './app-task/task2/task2.component';
import { UserShowDataComponent } from './user-show-data/user-show-data.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { CategriesComponent } from './categries/categries.component';
import { NewPageComponent } from './new-page/new-page.component';
import { setCss } from './Directives/setcss.directive';
import { PercentagePipe } from './percentage.pipe';
import { TotalPercentPipe } from './total-percent.pipe';
import { SidebarHomeComponent } from './sidebar-home/sidebar-home.component';
import { HomeSidebarComponent } from './sidebar/home-sidebar/home-sidebar.component';
import { AboutSidebarComponent } from './sidebar/about-sidebar/about-sidebar.component';
import { ServicesSidebarComponent } from './sidebar/services-sidebar/services-sidebar.component';
import { PortfolioSidebarComponent } from './sidebar/portfolio-sidebar/portfolio-sidebar.component';
import { ContactSidebarComponent } from './sidebar/contact-sidebar/contact-sidebar.component';

@NgModule({
  declarations: [AppComponent, TitleComponent, ModalComponent, SearchComponent,setCss, 
    UserComponent,localStorageComponent , imagesComponent, UserComponentComponent, AppTaskComponent, Task2Component, UserShowDataComponent, FormComponent, HomeComponent, UserHomeComponent, CategriesComponent, NewPageComponent, PercentagePipe, TotalPercentPipe, SidebarHomeComponent, HomeSidebarComponent, AboutSidebarComponent, ServicesSidebarComponent, PortfolioSidebarComponent, ContactSidebarComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
