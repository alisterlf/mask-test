import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  maskForm: FormGroup;
  public textMaskCurrecy = createNumberMask({
    prefix: 'R$',
    allowDecimal: true,
    thousandsSeparatorSymbol: '.',
    decimalSymbol: ','
  });
  public textMaskCPF = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  public textMaskDatePipe = createAutoCorrectedDatePipe('dd/mm/yyyy');
  public textMaskDate: any = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.buildForm();
  }
  private buildForm() {
    this.maskForm = this.fb.group({
      textMask: '',
      ngMask: '',
      textMaskCPF: '',
      ngMaskCPF: '',
      textMaskDate: '',
      ngMaskDate: ''
    });
  }
  convertCurrencyToDecimal(currency: string): number {
    console.log('currencyWithoutThousandsSeparator', +currency.replace(/[\.R\$]/g, '').replace(/[\,]/g, '.'));
    return +currency.replace(/[\.R\$]/g, '').replace(/[\,]/g, '.');
  }
  submitFund(): void {
    if (this.maskForm.valid) {
      console.log('this.maskForm.value', this.maskForm.value);
    }
  }
}
