import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-paymenthistory',
  standalone: true,
  imports: [RouterLink, NzButtonModule, NzFormModule, RouterModule, ReactiveFormsModule, NzGridModule, FormsModule ],
  templateUrl: './paymenthistory.component.html',
  styleUrl: './paymenthistory.component.scss'
})
export class PaymenthistoryComponent {

}
