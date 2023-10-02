import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { FaqComponent } from './pages/faq/faq.component';
import { AlertmodelComponent } from './sharepage/alertmodel/alertmodel.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'alerter', component: AlertmodelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

