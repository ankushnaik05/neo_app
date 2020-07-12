import { NgModule,Component, ViewEncapsulation, OnInit, AfterViewInit, ViewChild,Pipe } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
//import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { QuestionService } from './question.service'


@Pipe({name: 'safeHtml'})

export class SafeHtmlPipe{
  constructor(private sanitizer:DomSanitizer){ }
  transform(value: string, fallback: string): string {
    let image :any;
    if (value) {
      image = this.sanitizer.bypassSecurityTrustHtml(value);
    } else {
      image = fallback; 
    }
     return image;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
   name = 'Angular 6';
  
}


//update question
//add multiple answers to question
//update anser
//delete question
//delete answer
//listing of questions