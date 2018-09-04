import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';


const appRoutes = [
    {
        path: 'Home',
        component: HomeComponent,
    },
    {
        path: '',
        redirectTo: '/Home',
        pathMatch: 'full',
    }
];

@NgModule({
    declarations: [],

    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})

export class AppRoutingModule {}

