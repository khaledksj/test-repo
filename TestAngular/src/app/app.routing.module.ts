import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookComponent} from './book/book.component';
import {StudentComponent} from './student/student.component';



const routes: Routes = [
  // Fallback when no prior route is matched
  {path: 'book/book', component: BookComponent},
  {path: 'student/student', component: StudentComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
