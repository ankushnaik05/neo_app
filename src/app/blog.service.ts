import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const api_key="MQl8IZHRwbgkfZwUpaL74hveHzMnS0ujo1q1bJOp"

@Injectable({
  providedIn: 'root'
})

export class BlogService {
 
  constructor(private http:HttpClient) { }
  
  
  getNasaData(start_date, end_date){
    console.log("from service")
    return this.http.get("https://api.nasa.gov/neo/rest/v1/feed?start_date="+start_date+"&end_date="+end_date+"&api_key="+api_key);
 }


}
