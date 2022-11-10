import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Logs} from "./interfaces";
import {environment} from "../../environments/environment";


@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) {}

    public getLogs(): Observable<Logs[]> {
        return this.http.get<Logs[]>(environment.apiURL + '/logs')
    }

}




