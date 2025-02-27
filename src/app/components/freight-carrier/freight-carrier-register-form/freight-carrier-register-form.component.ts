import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '../../forms.module';
import { MatButtonModule } from '@angular/material/button';
import FreightCarrier from '../../../models/freightCarrierModel';
import { FreightCarrierService } from '../../../services/freight-carrier.service';

@Component({
  selector: 'app-freight-carrier-register-form',
  imports: [FormsModule, MatButtonModule],
  templateUrl: './freight-carrier-register-form.component.html',
  styleUrl: './freight-carrier-register-form.component.scss'
})
export class FreightCarrierRegisterFormComponent {
  freightCarrier!: FormGroup;

  constructor(
    private readonly freightCarrierService: FreightCarrierService
  ) {
    this.freightCarrier = new FormGroup({
      name: new FormControl([""], Validators.required),
      cnpj: new FormControl([""], Validators.required),
      email: new FormControl([""], Validators.email),
      phone: new FormControl([""]),
    });
  }

  onSubmit() {
    if(!this.freightCarrier.valid) return alert("Error")
    const freightCarrierToSave = FreightCarrier.formControlToModel(this.freightCarrier.value);

    this.freightCarrierService.saveFreightCarrier(freightCarrierToSave).subscribe({
      error: () => alert("Error no servidor, status 500")
    })
  }
}
