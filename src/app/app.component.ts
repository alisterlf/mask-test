import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  maskForm: FormGroup;
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public numberMask = createNumberMask({
    prefix: 'R$',
    allowDecimal: true,
    thousandsSeparatorSymbol: '.',
    decimalSymbol: ','
  });
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.buildForm();
  }
  private buildForm() {
    this.maskForm = this.fb.group({
      amount: ''
    });
  }
  convertCurrencyToDecimal(currency: string): number {
    console.log('currencyWithoutThousandsSeparator', +currency.replace(/[\.R\$]/g, '').replace(/[\,]/g, '.'));
    return +currency.replace(/[\.R\$]/g, '').replace(/[\,]/g, '.');
  }
  submitFund(): void {
    if (this.maskForm.valid) {
      this.convertCurrencyToDecimal(this.maskForm.get('amount').value);
      console.log('this.maskForm.value', this.maskForm.value);
    }
  }
}
