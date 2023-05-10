import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
public url1:any='https://reqres.in/api/users'
public url2:any='https://reqres.in/api/users/2'

  constructor(private http:HttpClient){}

  getApiData(){
    return this.http.get(this.url1)
  }

  postApiData(data1:any){
    return this.http.post(this.url1,data1)
  }

  deleteApiData(){
    return this.http.delete(this.url1)
  }
 putApiData(data2:any){
  return this.http.put(this.url2, data2)
 }
}
