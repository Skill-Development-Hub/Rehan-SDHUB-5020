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
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';




@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    
  
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
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

