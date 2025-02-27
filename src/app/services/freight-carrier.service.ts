import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import FreightCarrierMin from '../models/freightCarrierMinModel';
import FreightCarrier from '../models/freightCarrierModel';

@Injectable({
  providedIn: 'root',
})
export class FreightCarrierService {
  private host = "http://localhost:2020/freigh-carriers"

  constructor(
    private readonly http: HttpClient
  ) { }

  getAllFreightCarriers(): Observable<FreightCarrierMin[]> {
    return this.http.get<FreightCarrierMin[]>(this.host)
  }

  saveFreightCarrier(freightCarrier: FreightCarrier) {
    return this.http.post(this.host, freightCarrier)
  }
}
