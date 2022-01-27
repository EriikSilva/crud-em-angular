import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

//imports manuais
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';

import { NavComponent } from './components/template/nav/nav.component'; //1
import { MatSidenavModule } from '@angular/material/sidenav' //2
import { MatListModule } from '@angular/material/list';//3
import { MatButtonModule } from '@angular/material/button'//5
import { MatSnackBarModule } from '@angular/material/snack-bar';//6

// para fazer o forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'




import { HttpClientModule } from '@angular/common/http'

import { HomeComponent } from './views/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
//4


// import localePt from '@angular/common/locales/pt'
// import { registerLocaleData } from '@angular/common';


// registerLocaleData(localePt)


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductRead2Component,
    ProductUpdateComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, //1
    MatSidenavModule, //2
    MatListModule, //3
    MatCardModule, // 4
    MatButtonModule, //5
    MatSnackBarModule, //6
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
    
  ],
  providers: [
  //   {
  //   provide: LOCALE_ID,
  //   useValue: 'pt/BR'  
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
