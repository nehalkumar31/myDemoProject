import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServicesService {
public url:any='https://reqres.in/api/users?page=2'

  constructor(private http:HttpClient){}

getApiData(){
return this.http.get(this.url)
}

sendData(data:any){
  return this.http.post('https://reqres.in/api/users',data)
}

deleteApiRow(id:any){
 return this.http.delete(`${this.url}/${id}`)
}

updateData(data:any){
  return this.http.put('https://reqres.in/api/users',data)
}
}

