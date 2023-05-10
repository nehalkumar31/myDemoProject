import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewCrudService {

  constructor(private http:HttpClient) { }

  getApiData(){
    return this.http.get('http://localhost:3000/Data')
  }

  postApiData(data:any){
    return this.http.post('http://localhost:3000/Data',data)
  }

  deleteApiData(id:any){
    return this.http.delete('http://localhost:3000/Data/'+id)
  }

  updateApiData(data:any){
    return this.http.put('http://localhost:3000/Data/'+data.id, data)
  }
}

