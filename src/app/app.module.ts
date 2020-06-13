import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UpdateUserComponent } from './updates/update-user/update-user.component';
import { BloodBankComponent } from './add/blood-bank/blood-bank.component';
import { MedicineComponent } from './add/medicine/medicine.component';
import { MedicineShopComponent } from './add/medicine-shop/medicine-shop.component';
import { BbupdateComponent } from './updates/bbupdate/bbupdate.component';
import { BbsupdateComponent } from './updates/bbsupdate/bbsupdate.component';
import { MupdateComponent } from './updates/mupdate/mupdate.component';
import { MsupdateComponent } from './updates/msupdate/msupdate.component';
import { BblistComponent } from './lists/bblist/bblist.component';
import { BbslistComponent } from './lists/bbslist/bbslist.component';
import { MlistComponent } from './lists/mlist/mlist.component';
import { MslistComponent } from './lists/mslist/mslist.component';
import { AddbbComponent } from './Adds/addbb/addbb.component';
import { AddbbsComponent } from './Adds/addbbs/addbbs.component';
import { AddmedComponent } from './Adds/addmed/addmed.component';
import { AddmedshopComponent } from './Adds/addmedshop/addmedshop.component';
import { MsserviceService } from './services/msservice.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './lists/user-list/user-list.component';
import { AdduserComponent } from './adds/adduser/adduser.component';
import { UserService } from './services/user.service';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { SearchComponent } from './lists/search/search.component';
import { HomeComponent } from './home/home.component';
import { SearchService } from './services/search.service';
import { LoginService } from './services/login.service';





@NgModule({
  declarations: [
    AppComponent,
    UpdateUserComponent,
    BloodBankComponent,
    MedicineComponent,
    MedicineShopComponent,
    BbupdateComponent,
    BbsupdateComponent,
    MupdateComponent,
    MsupdateComponent,
    BblistComponent,
    BbslistComponent,
    MlistComponent,
    MslistComponent,
    AddbbComponent,
    AddbbsComponent,
    AddmedComponent,
    AddmedshopComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    UserListComponent,
    AdduserComponent,
    LogoutComponent,
    AdminComponent,
    SearchComponent,
    SearchComponent,
    HomeComponent
    ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule
    ],
  providers: [MsserviceService,UserService,SearchService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
