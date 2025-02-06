import { Component, OnInit } from '@angular/core';
import FreightCarrierMin from '../../../models/freightCarrierMinModel';
import { TablesModule } from '../tables.module';

@Component({
  selector: 'app-freight-carrier-table',
  imports: [TablesModule],
  templateUrl: './freight-carrier-table.component.html',
  styleUrl: './freight-carrier-table.component.scss'
})
export class FreightCarrierTableComponent implements OnInit {
  freightCarriers: FreightCarrierMin[] = [];
  columnsToDisplay = [
    "name",
    "cnpj",
    "phone",
    "createdAt",
  ];

  ngOnInit() {
    this.freightCarriers = [
      new FreightCarrierMin("Total Express", "3289173.3290813-00001", "(93) 98112-3223", new Date),
      new FreightCarrierMin("123Liom", "3289173.3290813-00001", "(93) 98112-3223", new Date),
      new FreightCarrierMin("Mercado Livre", "3289173.3290813-00001", "(93) 98112-3223", new Date),
    ];
    console.log(this.freightCarriers, "OLAA")
  }
}
