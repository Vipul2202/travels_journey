// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { Router, RouterModule } from '@angular/router';
// import { HeaderComponent } from "../layout/header/header.component";
// import { FooterComponent } from "../layout/footer/footer.component";

// @Component({
//   selector: 'app-signup',
//   standalone: true,
//   imports: [CommonModule, FormsModule, RouterModule, HeaderComponent, FooterComponent],
//   template: `
//     <app-header />
//     <div class="container mt-5 mb-5">
//       <div class="row justify-content-center">
//         <div class="col-md-6">
//           <div class="card">
//             <div class="card-header bg-warning text-white">
//               <h4 class="mb-0">Sign Up</h4>
//             </div>
//             <div class="card-body">
//               <form (ngSubmit)="onSignup()">
//                 <div class="mb-3">
//                   <label for="name" class="form-label">Full Name</label>
//                   <input
//                     type="text"
//                     class="form-control"
//                     id="name"
//                     [(ngModel)]="name"
//                     name="name"
//                     required
//                   />
//                 </div>
//                 <div class="mb-3">
//                   <label for="email" class="form-label">Email address</label>
//                   <input
//                     type="email"
//                     class="form-control"
//                     id="email"
//                     [(ngModel)]="email"
//                     name="email"
//                     required
//                   />
//                 </div>
//                 <div class="mb-3">
//                   <label for="password" class="form-label">Password</label>
//                   <input
//                     type="password"
//                     class="form-control"
//                     id="password"
//                     [(ngModel)]="password"
//                     name="password"
//                     required
//                   />
//                 </div>
//                 <div class="mb-3">
//                   <label for="confirmPassword" class="form-label"
//                     >Confirm Password</label
//                   >
//                   <input
//                     type="password"
//                     class="form-control"
//                     id="confirmPassword"
//                     [(ngModel)]="confirmPassword"
//                     name="confirmPassword"
//                     required
//                   />
//                 </div>
//                 <button type="submit" class="btn btn-warning w-100">
//                   Sign Up
//                 </button>
//               </form>
//               <div class="mt-3 text-center">
//                 <p>Already have an account? <a routerLink="/login">Login</a></p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <app-footer />
//   `,
// })
// export class SignupComponent {
//   name: string = '';
//   email: string = '';
//   password: string = '';
//   confirmPassword: string = '';

//   constructor(private router: Router) {}

//   onSignup() {
//     if (this.password !== this.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }
   
//     console.log('Signup attempt:', {
//       name: this.name,
//       email: this.email,
//       password: this.password,
//     });
  
//     this.router.navigate(['/login']);
//   }
// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
  ],
  template: `
    <app-header />
    <div class="container mt-5 mb-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header bg-warning text-white">
              <h4 class="mb-0">Sign Up</h4>
            </div>
            <div class="card-body">
              <form (ngSubmit)="onSignup()">
                <div class="mb-3">
                  <label for="fullName" class="form-label">Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="fullName"
                    [(ngModel)]="fullName"
                    name="fullName"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="userName" class="form-label">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    id="userName"
                    [(ngModel)]="userName"
                    name="userName"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email Address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    [(ngModel)]="email"
                    name="email"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="mobileNumber" class="form-label"
                    >Mobile Number</label
                  >
                  <input
                    type="tel"
                    class="form-control"
                    id="mobileNumber"
                    [(ngModel)]="mobileNumber"
                    name="mobileNumber"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    [(ngModel)]="password"
                    name="password"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="confirmPassword" class="form-label"
                    >Confirm Password</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="confirmPassword"
                    [(ngModel)]="confirmPassword"
                    name="confirmPassword"
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-warning w-100"
                  [disabled]="loading"
                >
                  {{ loading ? 'Signing Up...' : 'Sign Up' }}
                </button>
              </form>
              <div class="mt-3 text-center">
                <p>Already have an account? <a routerLink="/login">Login</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer />
  `,
})
export class SignupComponent {
  fullName: string = '';
  userName: string = '';
  email: string = '';
  mobileNumber: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false;

  constructor(private router: Router, private apiService: ApiService) {}

  onSignup() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.loading = true;
    const signupData = {
      name: this.fullName, 
      userName: this.userName,
      email: this.email,
      mobileNumber: this.mobileNumber,
      password: this.password,
    };

    this.apiService.signupAdmin(signupData).subscribe({
      next: (response) => {
        alert('Signup successful! Redirecting to login...');
        this.loading = false;
        this.router.navigate(['/login']);
      },
      error: (error) => {
        alert(error.error.message || 'Signup failed. Please try again.');
        this.loading = false;
      },
    });
  }
}
