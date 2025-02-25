import { Component } from '@angular/core';
import { FreightCarrierTableComponent } from "../../components/tables/freight-carrier-table/freight-carrier-table.component";
import { SideNavComponent } from "../../components/shared/side-nav/side-nav.component";

@Component({
  selector: 'app-freight-carriers',
  imports: [FreightCarrierTableComponent, SideNavComponent],
  templateUrl: './freight-carriers.component.html',
  styleUrl: './freight-carriers.component.scss'
})
export class FreightCarriersComponent {
  sideNavLinks = [
    { label: "Inicio", link: "Link" }
  ]
}
