import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-cancelsuscription',
  standalone: true,
  imports: [RouterLink, NzButtonModule, NzFormModule, RouterModule, ReactiveFormsModule, NzGridModule, FormsModule ],
  templateUrl: './cancelsuscription.component.html',
  styleUrl: './cancelsuscription.component.scss'
})
export class CancelsuscriptionComponent {

}
