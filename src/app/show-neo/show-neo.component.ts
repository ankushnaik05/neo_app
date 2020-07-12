import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../blog.service';
import * as Chart from 'chart.js'
import { DatePipe } from '@angular/common';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-show-neo',
  templateUrl: './show-neo.component.html',
  styleUrls: ['./show-neo.component.css'],
  providers: [DatePipe,MessageService]
})
export class ShowNeoComponent implements OnInit {
  canvas: any;
  ctx: any;
  ast_count:any;
  dateForm:FormGroup;
  loader:boolean=false;
  myChart;
  constructor(private messageService: MessageService,private formBuilder: FormBuilder,private BlogService:BlogService, public datepipe: DatePipe) { 
    this.dateForm =this.formBuilder.group({
      start_date : ['',Validators.required],
      end_date : ['',Validators.required]
    });
  }

  ngOnInit() {
  }
  onSubmit(){
    let start_date;let end_date;
    start_date=this.datepipe.transform(this.dateForm.value.start_date, 'yyyy-MM-dd');
    end_date=this.datepipe.transform(this.dateForm.value.end_date, 'yyyy-MM-dd');
    this.loader=true;
    this.BlogService.getNasaData(start_date,end_date).subscribe(
      (data:any)=>{
        this.loader=false;
        console.log("nasa data",data);
        /////////////////
        this.canvas = document.getElementById('myChart');
        this.ctx = this.canvas.getContext('2d');
        console.log(Object.keys(data.near_earth_objects));
        this.ast_count=[];
        for(let i=0; i< (Object.keys(data.near_earth_objects)).length; i++){
            let count= data['near_earth_objects'][Object.keys(data.near_earth_objects)[i]].length;
            this.ast_count.push(count);
        }
        if (this.myChart) {
          this.myChart.destroy();
        }
         this.myChart = new Chart(this.ctx, {
          type: 'bar',
          data: {
           // labels: ["2015-01", "2015-02", "2015-03", "2015-04", "2015-05", "2015-06", "2015-07", "2015-08", "2015-09", "2015-10", "2015-11", "2015-12"],
           labels: Object.keys(data.near_earth_objects), 
           datasets: [{
               label: '# of Asteroid',
              data: this.ast_count,
              backgroundColor: [
                '#ff6666',
                '#f0f8ff',
                '#ebf0f2',
                '#ffc3a0',
                '#fa8072',
                '#eea2ad',
                
              ],
              borderColor: [
                '#ff6666',
                '#f0f8ff',
                '#ebf0f2',
                '#ffc3a0',
                '#fa8072',
                '#eea2ad',
                
              ],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            scales: {
              xAxes: [{
                ticks: {
                  maxRotation: 90,
                  minRotation: 80,
                  fontColor: "white",
                },
                gridLines: {
                  lineWidth: 1,
                  color: '#ffffff',
                  
                },
              }],
              backgroundColor: 'rgba(123, 83, 252, 0.8)',
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  fontColor: "white",
                  
                },
                gridLines: {
                  color: "white",
                  lineWidth: 1
                },
              }],
              
            },
            
          }
        });
      
    
        //////////////////////////
      
      },(err)=>{
        console.log(err);
        this.messageService.add({life:10000,severity:'error', summary:'Service Message', detail:err['error']['error_message']});
        this.loader=false
      }
      
    )
    console.log("sumbited",this.dateForm.value)
  }

}
