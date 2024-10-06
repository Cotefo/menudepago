import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ButtonComponent } from '../../shared/component/button/button.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterLink, NzButtonModule,
     RouterModule, ReactiveFormsModule,
      NzGridModule, FormsModule, CommonModule, ButtonComponent ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})

export class SettingsComponent {



  form:FormGroup;
  isVisible = false;
  item:any;

 constructor (
  private fb:FormBuilder,

  private message: NzMessageService


)


{
  this.form = this.fb.group({
    nombre:[null,[Validators.required, Validators.maxLength(50), Validators.minLength(3)] ],
    apellido:[null,[Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
    direccion:[null,[Validators.required, Validators.minLength (5), Validators.maxLength(100)] ],
    edad:[null,[Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(1), Validators.maxLength(5)]],
    correo:[null, [Validators.required, Validators.email ]]
  })

  this.item = { name: 'nombre',
                mail:'email'
   }; // Inicializa el item


 }


imprimirFormulario (){


  if(this.form.valid){

    alert("Formulario válido");


  }
  else
  {
      alert("Formulario inválido");
    }

}
get isValid():boolean{
  return this.form.valid;
 }
 if(){
alert("Error");
 }


toggleVisibility() {
  this.isVisible = !this.isVisible;
}
createBasicMessage(): void {
  this.message.success('Los datos suministrados son válidos', {
    nzDuration: 10000
  });
}
}

