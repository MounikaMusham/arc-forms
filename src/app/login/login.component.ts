import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  addLoginForm! : FormGroup;

  constructor(private fb:FormBuilder) { }

  trackName(): void {
    // this.addLoginForm.valueChanges.subscribe((data: any)=>{
    //   console.log(data);
    // });

    this.addLoginForm.get('firstName')?.valueChanges.subscribe((data:any)=>{
      console.log(data);
    })
  }

  ngOnInit(): void {
    // this.addLoginForm = new FormGroup({
    //   'firstName':new FormControl(),
    //   'email': new FormControl(),
    //   'description': new FormControl()

    // })

//direct way of setting the form value at form creation

// this.addLoginForm = this.fb.group({
//   'firstName':new FormControl('Mounika'),
//   'email': new FormControl('xyz@gmail.com'),
//   'description': new FormControl('good morning')

// })

  // let users = new FormArray([
  //     new FormControl('Mounika'),
  //     new FormControl('Musham')
  // ]);

  // console.log(users);
  // console.log(users.value);

    this.addLoginForm = this.fb.group({
      'firstName':new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15)

      ]),
      'email': new FormControl('', [Validators.email,
      Validators.required]),
      'description': new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(15)
      ])),
    //   'users': new FormArray([
    //     new FormControl('Mounika'),
    //     new FormControl('Musham')
    // ])
   'users':new FormArray([
     this.fb.group({
       'name':new FormControl(''),
       'age':new FormControl(''),
       'dept': new FormControl('')
     })
   ])


    })

    // const newLoginObj = {
    //   'firstName':'Mounika',
    //   'email': 'mounika.musham11@gmail.com',
    //   'description': 'hello Everyone'
    // }

    //should specify all values
    // this.addLoginForm.setValue(newLoginObj);

// patchValue is similar to setValue diff is all fields are not necessary
    //this.addLoginForm.patchValue(newLoginObj);

  }

  add(){
  // console.log(this.addLoginForm.value);

  //to get specific data

  //console.log(this.addLoginForm.value.email);

  //when values changed

  //this.addLoginForm.valueChanges.subscribe(data=>{
    //console.log(data);
 // })

if(this.addLoginForm.valid){

}
if(this.addLoginForm.invalid){

}



 console.log(this.addLoginForm.valid);
 console.log(this.addLoginForm.invalid);
 console.log(this.addLoginForm.pending);
 console.log(this.addLoginForm.pristine);
 console.log(this.addLoginForm.dirty);
 console.log(this.addLoginForm.touched);
 console.log(this.addLoginForm.untouched);
}

resetForm(){
  this.addLoginForm.reset();
}


}
