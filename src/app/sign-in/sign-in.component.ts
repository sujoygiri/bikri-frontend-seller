import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    CardModule,
    IconFieldModule,
    InputIconModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {
  signinForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      sellername: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]]
    });
  }
  handelFormSubmit() {
    console.log(this.signinForm);

  }
  showPassword() {
    let passwordElementNode = this.elementRef.nativeElement.querySelector("#password");
    let showBtnElementNode = this.elementRef.nativeElement.querySelector("#show-btn");
    if (showBtnElementNode.innerText === 'Show') {

      showBtnElementNode.classList.add('text-blue-400');
      showBtnElementNode.classList.remove('text-red-400');
      showBtnElementNode.innerText = 'Hide';
    } else {
      showBtnElementNode.classList.add('text-red-400');
      showBtnElementNode.classList.remove('text-blue-400');
      showBtnElementNode.innerText = 'Show';
    }
    passwordElementNode.type = passwordElementNode.type === 'password' ? 'text' : 'password';
  }
}
