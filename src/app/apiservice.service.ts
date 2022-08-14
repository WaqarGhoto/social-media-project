import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIserviceService {
  // here we will define the base url 
  baseUrl:string='assets/mock-database/';
  // Terp
  constructor(private httpClient:HttpClient) { 

    // this.httpClient.get(this.baseUrl+"users.json").subscribe(data =>{
    //   console.log("Users Data ",data);
    // });
  }

 
  /**
   * *************************   Here will be All mock API's that will read data from JSON files  ***************************
   */

  /**
   *         User Login   
   */

  async login(username:string , password): Promise<any> {
    let usersList;
    await this.httpClient.get(this.baseUrl+"users.json").subscribe(data=>{usersList=data});
    console.log("Users List :",usersList);
    return new Promise(null);
  }





}
