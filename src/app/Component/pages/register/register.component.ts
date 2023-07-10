import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Register } from 'src/assets/register';
import { Unique } from './helpers/Unique';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  Designation:any = ['Student', 'Profession', 'Other']
  Gender: any = ['Female', 'Male'];
  Mstatus: any = ['Single', 'Married'];

  dres: any;

  register: any;
  userdata: any;

  submitted = false;
  uniqueemailerror: boolean = false;

  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    gender: new FormControl(''),
    mstatus: new FormControl(''),
    dateOfBirth: new FormControl(''),
    pinCode: new FormControl(''),
    designation: new FormControl(''),
  });

  constructor(
    private route: Router,
    private formBuilder: FormBuilder,
    private taskService: TaskService,
  ) {}

  ngOnInit(): void {
    this.taskService.getRegister().subscribe((response: any) => {
      let data = response;
      this.registerForm = this.formBuilder.group(
        {
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          phoneNumber: [
            '',
            [
              Validators.required,
              Validators.minLength(10),
              Validators.maxLength(10),
              Validators.pattern(new RegExp('[0-9]{10}')),
            ],
          ],
          gender: ['', [Validators.required]],
          mstatus: ['', [Validators.required]],
          dateOfBirth: ['', [Validators.required]],
          pinCode: [
            '',
            [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(6),
              Validators.pattern(new RegExp('[0-9]{6}')),
            ],
          ],
          designation: ['', [Validators.required]],
        },
        {
          validator: [
            // Unique('email', data),
          ],
        }
      );
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit(data: any) {
    this.submitted = true;

    console.log('hi');
    
    console.log(data);

    if (this.registerForm.invalid) {
      // if (this.registerForm.controls.email.errors ? ['uniqueMail'] : ' ')
      //   this.uniqueemailerror = true;
      return;
    }

    let newregistration: Register = {
      name: data.name,
      email: data.email,
      phoneNumber: Number(data.phoneNumber),
      gender: data.gender,
      mstatus: data.mstatus,
      dateOfBirth: data.dateOfBirth,
      pinCode: Number(data.pinCode),
      designation: data.designation,
    };

    this.taskService.createRegister(newregistration).subscribe((response: any) => {
      localStorage.setItem('loginid', JSON.stringify(response._id));

      if (confirm('Form submitted successfully'))
        // response.role === 'Customer'
        //   ? this.route.navigate(['/customer'])
        //   : this.route.navigate(['/seller']);

      this.submitted = false;
      this.registerForm.reset();
    });
  }
}
