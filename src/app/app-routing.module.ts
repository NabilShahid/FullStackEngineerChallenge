import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "login",
    component:LoginComponent
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then(mod => mod.AdminModule)
  },
  {
    path: "**",
		pathMatch: "full",
		redirectTo: "login"
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
