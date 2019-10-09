import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  public formUser: FormGroup = new FormGroup({
    'name': new FormControl(null),
    'email': new FormControl(null),
    'password': new FormControl(null),
    'birthday': new FormControl(null),
    'address': new FormControl(null),
    'addressNumber': new FormControl(null),
    'complement': new FormControl(null),
    'phone': new FormControl(null),
    'whatsApp': new FormControl(null),
    'dependents': this.formBuilder.array([this.createDependents()])
  });

  public dependents: FormArray;

  public createDependents(): FormGroup {
    return this.formBuilder.group({
      name: '',
      birthday: ''
    });
  }

  public addDependents(): void {
    this.dependents = this.formUser.get('dependents') as FormArray;
    this.dependents.push(this.createDependents())
  }

  public registerUser(): void {
    console.log(this.formUser);
  }

  ngOnInit() {}
}
