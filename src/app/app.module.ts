import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api'; 
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
//import { AngularEditorModule } from '@kolkov/angular-editor';
import {  ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SafeHtmlPipe } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {StepsModule} from 'primeng/steps';
import {ButtonModule} from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {EditorModule} from 'primeng/editor';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import { QuestionService } from './question.service';
import {MultiSelectModule} from 'primeng/multiselect';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import { AppRoutingModule } from './app-routing.module';
import {TableModule} from 'primeng/table';
import {InputSwitchModule} from 'primeng/inputswitch';
import { BlogService } from './blog.service';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { ShowNeoComponent } from './show-neo/show-neo.component';
import {CalendarModule} from 'primeng/calendar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ProgressBarModule} from 'primeng/progressbar';
import {ToastModule} from 'primeng/toast';
@NgModule({
  declarations: [
    AppComponent,SafeHtmlPipe, ShowNeoComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    BrowserModule, 
    FormsModule, 
    //AngularEditorModule, 
    HttpClientModule,
    ReactiveFormsModule,
    InputTextModule,
    StepsModule,
    ButtonModule,
    InputTextareaModule,
    EditorModule,
    CodeHighlighterModule,
    MultiSelectModule,
    BrowserAnimationsModule,
    DropdownModule,
    AppRoutingModule,
    InputSwitchModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    CalendarModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    ToastModule
  ],
  providers: [QuestionService,BlogService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
