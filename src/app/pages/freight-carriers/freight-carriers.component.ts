import { Component } from '@angular/core';
import { FreightCarrierTableComponent } from "../../components/tables/freight-carrier-table/freight-carrier-table.component";

@Component({
  selector: 'app-freight-carriers',
  imports: [FreightCarrierTableComponent],
  templateUrl: './freight-carriers.component.html',
  styleUrl: './freight-carriers.component.scss'
})
export class FreightCarriersComponent {
  
}
