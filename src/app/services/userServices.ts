import {Injectable} from '@angular/core'
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable()
export class UserServices{
	constructor(private http:HttpClient){}

	private static rest_url="https://jsonplaceholder.typicode.com";
	getAllUsers(){
	return this.http.get<any>(UserServices.rest_url+'/users')
	.toPromise()
	.then(res => <UserServices[]>res)
	.then(response=>{
	console.log(JSON.stringify(response))
	return response
	});
	}

}