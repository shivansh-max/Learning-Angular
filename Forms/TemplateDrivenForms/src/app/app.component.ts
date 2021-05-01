import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  defaultQuestin = 'teacher';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secret: '',
    questionAnswer: '',
    gender: ''
  };
  submit = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    this.signUpForm.setValue({
      userData: {
        username: suggestedName,
        email: 'shivanshupadhyay22@gmail.com'
      },
      secret: 'teacher',
      questionAnswer: 'Ms.Logos',
      gender: 'male'
    });

    // this.signUpForm.form.patchValue({
    //   userData: {
    //     username: suggestedName
    //   }
    // });
  }

  // onSumbit(form: NgForm) {
  //   console.log(form.value)
  // }
  onSumbit() {
    // console.log(this.signUpForm)
    this.submit = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secret = this.signUpForm.value.secret;
    this.user.questionAnswer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();
  }
}
