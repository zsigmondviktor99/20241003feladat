import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButorokComponent } from './butorok/butorok.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { RolunkComponent } from './rolunk/rolunk.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  //Sima
  {path: "butorok", component:ButorokComponent},
  {path: "fooldal", component:FooldalComponent},
  {path: "rolunk", component:RolunkComponent},

  //Alapertelmezett
  {path: "", redirectTo: "/fooldal", pathMatch: "full"},

  //Error
  {path: "**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
