import { Component, Input, OnInit, signal } from '@angular/core';
import FreightCarrierMin from '../../../models/freightCarrierMinModel';
import { TablesModule } from '../../tables.module';
import { FreightCarrierService } from '../../../services/freight-carrier.service';

@Component({
  selector: 'app-freight-carrier-table',
  imports: [TablesModule],
  templateUrl: './freight-carrier-table.component.html',
  styleUrl: './freight-carrier-table.component.scss'
})
export class FreightCarrierTableComponent implements OnInit {
  freightCarriers = signal<FreightCarrierMin[]>([]);
  columnsToDisplay!: string[]

  constructor(
    private readonly freightCarrierService: FreightCarrierService
  ) {
    this.columnsToDisplay = [ "name", "cnpj", "phone", "createdAt" ];
  }

  ngOnInit(): void {
    this.freightCarrierService.getAllFreightCarriers().subscribe(this.freightCarriers.set);
  }
}
