import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ServerService {
  private readonly baseUrl = "https://localhost:5001/api/";
  constructor(private http: HttpClient) {}

  get(url: string, headers?: HttpHeaders) {
    return this.http.get(this.baseUrl + url);
  }

  post(url: string, body = {}) {
    return this.http.post(this.baseUrl + url, body);
  }
}
