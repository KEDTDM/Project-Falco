import { Injectable } from '@angular/core';
import { Data } from './data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class Api2Service {
  redirectUrl: string;
  baseUrl: string = 'http://localhost/pro/php';
  constructor(private httpClient: HttpClient) {}
  readData(): Observable<Data[]>{
		return this.httpClient.get<Data[]>(`${this.baseUrl}/index.php`);
	}
	createData(data: Data): Observable<Data>{
		return this.httpClient.post<Data>(`${this.baseUrl}/inset.php`, data);
	}
	updateData(data: Data){
		return this.httpClient.put<Data>(`${this.baseUrl}/update.php`, data);
	}
  deleteData(id: number){
		return this.httpClient.delete<Data>(`${this.baseUrl}/delete.php/?id=${id}`);
		
	}
}
