import { Component, inject, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { DialogData } from '../all-students/all-students.component';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  form: FormGroup;

  private toastService = inject(ToastrService);

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<EditStudentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {

    this.form = this.formBuilder.group({
      PlacePD: ['', Validators.required],
      ContryNum: ['', Validators.required],
      PirthDate: '',
      LnameE: ["", [Validators.required]],
      TnameE: ["", [Validators.required]],
      SnameE: ["", [Validators.required]],
      fnameE: ["", [Validators.required]],
      Lname: ["", [Validators.required]],
      Tname: ["", [Validators.required]],
      Sname: ["", [Validators.required]],
      fname: ["", [Validators.required]],
      six: "male",
      city: "",
      section: "",
      phone: ["", [Validators.minLength(9)]],
      country: "ye",
      lSchool: "",
      class: "",
      discriptionJob: "",
      typeJob: "",
      parantJob: "",
      parantType: "father",
      parantEmail: "",
      parantPhone: ['', [Validators.required, Validators.minLength(8)]],
      ParantName: '',
      ParnatContryNum: "",
      image: "",
    });
  }

  ngOnInit(): void {
    this.patchFormValue();
  }

  patchFormValue(): void {
    this.form.patchValue({
      
    });
  }

  closeEdit(): void {
    this.dialogRef.close(null);
  }

  onSubmit(): void {
   
  }

  

  validateImageFile(event: any): void {
    const file = event.target.files[0];
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

    if (file) {
      const fileExtension = file.name.split('.').pop().toLowerCase();

      if (!allowedExtensions.includes(fileExtension)) {
        this.toastService.error('(JPG, JPEG, PNG or GIF) يجب أن يكون أمتداد الصورة ');
        // Reset the file input
        event.target.value = '';
      }
    }
  }
}
