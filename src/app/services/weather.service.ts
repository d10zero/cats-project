import { ApiDetails } from '../configs/apiDetails';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class WeatherService {

	constructor(private http: HttpClient) {}



	getWeather(latitude: number, longitude: number): Observable<any> {
		return this.http.get<Observable<any>>(ApiDetails.weatherRequest + latitude + ',' + longitude);
	}

	nyc(): any {
		return {
			"latitude": 40.7,
			"longitude": 74,
			"timezone": "Asia/Bishkek",
			"currently": {
			    "time": 1547896574,
			    "summary": "Overcast",
			    "icon": "wind",
			    "precipIntensity": 0,
			    "precipProbability": 0,
			    "temperature": 20.05,
			    "apparentTemperature": 12.58,
			    "dewPoint": 18.8,
			    "humidity": 0.95,
			    "pressure": 1019.89,
			    "windSpeed": 5.42,
			    "windGust": 9.86,
			    "windBearing": 88,
			    "cloudCover": 0.94,
			    "uvIndex": 0,
			    "visibility": 10,
			    "ozone": 298.7
			}
		}
	}
	chicago(): any {
		return {
		    "latitude": 41.8,
		    "longitude": 87.6,
		    "timezone": "Asia/Urumqi",
		    "currently": {
		        "time": 1547896736,
		        "summary": "Snow",
		        "icon": "snow",
		        "precipIntensity": 0,
		        "precipProbability": 0.1,
		        "temperature": 24.59,
		        "apparentTemperature": 18.54,
		        "dewPoint": 10.74,
		        "humidity": 0.55,
		        "pressure": 1037.75,
		        "windSpeed": 4.83,
		        "windGust": 7.49,
		        "windBearing": 60,
		        "cloudCover": 0,
		        "uvIndex": 0,
		        "visibility": 10,
		        "ozone": 347.51
			}
		}
	}
	losAngeles(): any {
		return {
		    "latitude": 34,
		    "longitude": 118,
		    "timezone": "Asia/Shanghai",
		    "currently": {
		        "time": 1547896867,
		        "summary": "Clear",
		        "icon": "cloudy",
		        "precipIntensity": 0,
		        "precipProbability": 0.01,
		        "temperature": 41.08,
		        "apparentTemperature": 36.23,
		        "dewPoint": 24.15,
		        "humidity": 0.51,
		        "pressure": 1024.12,
		        "windSpeed": 7.36,
		        "windGust": 11.33,
		        "windBearing": 342,
		        "cloudCover": 0,
		        "uvIndex": 0,
		        "visibility": 10,
		        "ozone": 267.95
		    }
		}
	}
	houston(): any {
		return {
		    "latitude": 29.7,
		    "longitude": 95.3,
		    "timezone": "Asia/Shanghai",
		    "currently": {
		        "time": 1547898454,
		        "summary": "Clear",
		        "icon": "clear-day",
		        "precipIntensity": 0.0002,
		        "precipProbability": 0.02,
		        "precipType": "snow",
		        "temperature": 29.75,
		        "apparentTemperature": 29.75,
		        "dewPoint": 9.07,
		        "humidity": 0.41,
		        "pressure": 1020.14,
		        "windSpeed": 1.3,
		        "windGust": 2.89,
		        "windBearing": 189,
		        "cloudCover": 0.07,
		        "uvIndex": 0,
		        "visibility": 10,
		        "ozone": 275
		    },
		}
	}
}