import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandupNoteComponent } from './pages/standup-note/standup-note.component';
import { CreateNoteComponent } from './pages/create-note/create-note.component';

const routes: Routes = [
  { path: '', component: StandupNoteComponent },
  { path: 'create_note', component: CreateNoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
