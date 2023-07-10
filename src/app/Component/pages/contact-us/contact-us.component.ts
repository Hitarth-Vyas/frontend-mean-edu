import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Contact } from 'src/assets/contact_us/contact';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  register: any;
  userdata: any;

  submitted = false;

  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    message: new FormControl('')
  });

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService,
  ) {}

  ngOnInit(): void {
    this.taskService.getContact().subscribe((response: any) => {
      let data = response;
      this.contactForm = this.formBuilder.group(
        {
          name: ['', Validators.required],
          email: [''],
          phoneNumber: [
            '',
            [
              Validators.required,
              Validators.minLength(10),
              Validators.maxLength(10),
              Validators.pattern(new RegExp('[0-9]{10}')),
            ],
          ],
          message: ['', [Validators.required]],
        }
      );
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(data: any) {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    let newcontact: Contact = {
      name: data.name,
      email: data.email,
      phoneNumber: Number(data.phoneNumber),
      message: data.message,
    };

    this.taskService.createContact(newcontact).subscribe((response: any) => {
      localStorage.setItem('contactid', JSON.stringify(response._id));

      if (confirm('Form submitted successfully'))
        // response.role === 'Customer'
        //   ? this.route.navigate(['/customer'])
        //   : this.route.navigate(['/seller']);

      this.submitted = false;
      this.contactForm.reset();
    });
  }
}
