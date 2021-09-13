import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogCommentComponent } from './components/blog-comment/blog-comment.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SearchComponent } from './components/side-bar/search/search.component';
import { CategoriesComponent } from './components/side-bar/categories/categories.component';
import { SideComponent } from './components/side-bar/side/side.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    BlogPostComponent,
    BlogCommentComponent,
    SideBarComponent,
    SearchComponent,
    CategoriesComponent,
    SideComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
