import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { LegalComponent } from './legal/legal.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'imprint', component: ImprintComponent},
  { path: 'legal', component: LegalComponent} //if the path is /legal //

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
