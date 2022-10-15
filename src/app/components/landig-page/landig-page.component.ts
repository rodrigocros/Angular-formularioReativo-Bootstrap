import { Component, OnInit } from '@angular/core';
import { ModuleTeardownOptions } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import {Modal} from 'bootstrap';

declare var window:any;

@Component({
  selector: 'app-landig-page',
  templateUrl: './landig-page.component.html',
  styleUrls: ['./landig-page.component.css']
})

export class LandigPageComponent implements OnInit {
  formModal: any;

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    )
  }
  openModal(){
    this.formModal.show();
  }
  closeModal(){
    this.formModal.hide();
  }
  showData(){
    console.log(this.formHireME)
    this.formModal.hide();
    this.formHireME.reset();
  }

  formHireME: FormGroup = new FormGroup({});

  constructor(private FormBuilder: FormBuilder){
    this.formHireME = FormBuilder.group({
      bossInfo: FormBuilder.group({
        name : FormBuilder.control(""),
        lastName : FormBuilder.control(""),
        email : FormBuilder.control(""),
        textArea : FormBuilder.control("")
      })

    })
  }
  




}
