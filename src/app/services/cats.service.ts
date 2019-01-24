import { ApiDetails } from '../configs/apiDetails';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CatService {

	constructor(private http: HttpClient) {}

	getCatImages(): Observable<any> {
		const crossOriginHeaders = {
			headers: new HttpHeaders({
				'Access-Control-Allow-Origin': '*'
			})
		}
		return this.http.get<Observable<any>>(ApiDetails.catImages );
	}

	getCatFacts(): Observable<any> {
		const factHeaders = {
			headers: new HttpHeaders({
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json'
			})
		}
		return this.http.get<Observable<any>>(ApiDetails.catFacts, {headers: new HttpHeaders( { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}) } );
	}

	

	//	Access-Control-Allow-Origin: http://thecatapi.com

		//Access-Control-Allow-Origin: http://catfact.ninja
	

}