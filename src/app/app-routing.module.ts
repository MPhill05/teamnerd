import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GrantComponent } from './grant/grant.component';
import { MarkComponent } from './mark/mark.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: 'contact', component: ContactComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'grant', component: GrantComponent },
    { path: 'mark', component: MarkComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'home', component: HomeComponent }
    
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}