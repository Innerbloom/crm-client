import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Logs, Partners, Users} from "./interfaces";
import {environment} from "../../environments/environment";


@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) {}

    public getLogs(): Observable<Logs[]> {
        return this.http.get<Logs[]>(environment.apiURL + '/logs')
    }

    public getPartners(): Observable<Partners[]> {
        return this.http.get<Partners[]>(environment.apiURL + '/partners')
    }

    public postPartners(regPartners: Partners) {
        return this.http.post(environment.apiURL + '/partners', regPartners)
    }

    public putPartners(regPartners: Partners, id: number) {
        return this.http.put(environment.apiURL + '/partners/'+id, regPartners)
    }

    public deletePartners(id: number) {
        return this.http.delete<any>(environment.apiURL + '/partners/'+id);
    }
}





