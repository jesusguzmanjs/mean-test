import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MainService {
    constructor(private http: HttpClient) { }

    uploadCSV = (formData: any) => {
        const httpOptions = {
            headers: new HttpHeaders({"accept":"multipart/form-data"})
        };
        return this.http.post(`${environment.API_URL}/upload-csv`, formData, httpOptions);
    }

    getData = () => {
        return this.http.get(`${environment.API_URL}/bills`);
    }

    updateBill = (billId: string, data: any) => {
        return this.http.put(`${environment.API_URL}/update-bill/${billId}`, data);
    }

    createBill = (data: any) => {
        return this.http.post(`${environment.API_URL}/create-bill`, data);
    }

    deleteBills = (ids: string[]) => {
        return this.http.post(`${environment.API_URL}/delete-bill`, {ids: ids});
    }
}
