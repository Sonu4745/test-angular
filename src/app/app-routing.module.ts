import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { localStorageComponent } from './local-storage/local-storage.component';
import { NewPageComponent } from './new-page/new-page.component';
import { SidebarHomeComponent } from './sidebar-home/sidebar-home.component';
import { HomeSidebarComponent } from './sidebar/home-sidebar/home-sidebar.component';
import { AboutSidebarComponent } from './sidebar/about-sidebar/about-sidebar.component';
import { PortfolioSidebarComponent } from './sidebar/portfolio-sidebar/portfolio-sidebar.component';
import { ContactSidebarComponent } from './sidebar/contact-sidebar/contact-sidebar.component';
import { ServicesSidebarComponent } from './sidebar/services-sidebar/services-sidebar.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
 
  },
  {
    path:'pricing',
    component: FormComponent
  },
  {
    path:'features',
    component: localStorageComponent
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {path:'newPage',
    component:NewPageComponent
  },{
    path:'side-bar',
    component:SidebarHomeComponent,
       children:[
      {path:'home-sidebar',
        component:HomeSidebarComponent
      },
      {
        path:'about',
        component:AboutSidebarComponent
      },{
        path:'portfolio',
        component:PortfolioSidebarComponent
      },{
        path:'contact',
        component:ContactSidebarComponent
      }
      ,{
      path:'services',
      component:ServicesSidebarComponent  
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
