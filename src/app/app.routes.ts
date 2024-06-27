import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddProductComponent } from './add-product/add-product.component';

export const routes: Routes = [
    { path: "sign-in", component: SignInComponent },
    { path: "sign-up", component: SignUpComponent },
    { path: "add-product", component: AddProductComponent }
    // {path:"**",redirectTo:"/",pathMatch:"full"}
];
