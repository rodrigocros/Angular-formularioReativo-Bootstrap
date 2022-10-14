import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-materiais',
  templateUrl: './registro-materiais.component.html',
  styleUrls: ['./registro-materiais.component.css']
})
export class RegistroMateriaisComponent implements OnInit {
  registroMaterias:FormGroup = new FormGroup({});

  constructor(private formBuilder:FormBuilder) {
    this.registroMaterias = formBuilder.group({
      materiaInfo:formBuilder.group({
        nome : formBuilder.control('',[Validators.required, Validators.minLength(3)]),
        horasAula : formBuilder.control('',[Validators.required, Validators.max(100), Validators.min(30)]),
        escola : formBuilder.control('',[Validators.required, Validators.minLength(3)]),
        professor : formBuilder.control('',Validators.required),
        opcional : formBuilder.control('',Validators.required)
      })
    })
   }

   Showdata(){
    console.log(this.registroMaterias)
    // this.registroMaterias.reset()
   }

  ngOnInit(): void {
  }




}
