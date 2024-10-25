import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatStepperModule} from '@angular/material/stepper';
import { MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';





@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegistrationComponent,
    HomeComponent,
    AboutComponent,
    RegistrationComponent,
    FooterComponent,
    NavbarComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

