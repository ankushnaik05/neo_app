import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

   saveQuestion(data){
     console.log("from service",data)
    return this.http.post("http://localhost:5000/api/postQuestion",data);
  }
  saveAnswers(data){
    return this.http.post("http://localhost:5000/api/addAnswer",data);
  }

  addTags(data){
    return this.http.post("http://localhost:5000/api/addTagsToQuestion",data);
  }

  getCategories(){
    return this.http.get("http://localhost:3000/api/getCategories");
  }
  getTags(){
    return this.http.get("http://localhost:3000/api/getAllTags");
  }
}
