import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {CreateCustomerComponent} from './app.addEmployee';
import {ViewAccountComponent} from './app.viewList';
import { SearchAccountComponent } from './SearchEmployee';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';

const routes:Routes =[
    {path:'',redirectTo:'account', pathMatch:'full'},
    {path:'Add',component:CreateCustomerComponent},
    {path:'Delete',component:SearchAccountComponent},
    {path:'Find',component:SearchAccountComponent},
    {path:'View',component:ViewAccountComponent},
];

@NgModule({
    imports: [
        BrowserModule, BrowserModule,HttpClientModule,FormsModule,RouterModule.forRoot(routes)
        
    ],
    declarations: [
        AppComponent,CreateCustomerComponent,SearchAccountComponent,ViewAccountComponent,
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }