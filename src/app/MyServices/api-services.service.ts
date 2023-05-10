import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  public link:any='https://jsonplaceholder.typicode.com/users'
 public Player1:any=[{
  name: 'Virat Kohli',
  age:34,
  jnum:18
 }];
 public Player2:any=[{
  name: 'Rohit Sharma',
  age:35,
  jnum:45
 }];
 public Player3:any=[{
  name: 'MS Dhoni',
  age:40,
  jnum:7
 }];


 getPlayer1info(){
 return this.Player1
 }

 getPlayer2info(){
 return this.Player2
 }

 getPlayer3info(){
 return this.Player3
 }

constructor(private http:HttpClient){}

getApiData(){
 return this.http.get(this.link)
}

postApiData(data:any){
  return this.http.post(this.link,data)
}

}



