export default class FreightCarrier {
  constructor(
    public id: string | null,
    public name: string,
    public cnpj: string,
    public phone: string,
    public email: string
  ) {}

  static formControlToModel(freightCarrier: FreightCarrier) {
    return new FreightCarrier(null, freightCarrier.name, freightCarrier.cnpj, freightCarrier.phone, freightCarrier.email)
  }
}
