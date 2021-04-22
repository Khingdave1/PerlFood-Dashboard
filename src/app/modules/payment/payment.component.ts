import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/interfaces/payment';
import { ExportService } from 'src/app/services/export.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  payments: any;
  product: string;
  p: number = 1;

  constructor(private paymentService: PaymentService, private exportService: ExportService) { }

  ngOnInit(): void {
    // Getting all payments from Firebase
    this.paymentService.getPayments().subscribe((p: any) => {
      this.payments = []
      p.forEach((i: any) => {
        let item = i.payload.doc.data() as Payment
        item.id = i.payload.doc.id
        this.payments.push(item)
      })
    })
  }

  // Search payments
  search() {
    if (this.product != "") {
      this.payments = this.payments.filter((res: any) => {
        return res.product.toLocaleLowerCase().match(this.product.toLocaleLowerCase());
      });
    } else if (this.product == "") {
      this.ngOnInit()
    }
  }

  // Export as Excel
  exportexcel() {
    this.exportService.exportExcel(this.payments, 'paymentData');
  }

}
