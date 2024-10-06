import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/component/button/button.component';
import { InputComponent } from '../../shared/component/input/input.component';
import { HeaderComponent } from '../../shared/component/header/header.component';

@Component({
  selector: 'app-paymenthistory',
  standalone: true,
  imports: [RouterLink, NzButtonModule, ButtonComponent,
     NzFormModule, RouterModule,
     ReactiveFormsModule, NzGridModule,
     FormsModule, CommonModule, InputComponent, HeaderComponent ],
  templateUrl: './paymenthistory.component.html',
  styleUrl: './paymenthistory.component.scss'
})
export class PaymenthistoryComponent {

}
