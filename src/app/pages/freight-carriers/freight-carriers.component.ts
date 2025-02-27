import { Component } from '@angular/core';
import { FreightCarrierTableComponent } from '../../components/freight-carrier/freight-carrier-table/freight-carrier-table.component';
import { SideNavComponent } from '../../components/shared/side-nav/side-nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-freight-carriers',
  imports: [SideNavComponent, RouterOutlet],
  templateUrl: './freight-carriers.component.html',
  styleUrl: './freight-carriers.component.scss'
})
export class FreightCarriersComponent {
  sideNavLinks = [
    { label: "Listar Empresas", link: "" },
    { label: "Cadastrar Empresa", link: "register" },
  ]
}
