import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CameraStatusComponent } from './camera-status/camera-status.component';

const routes: Routes = [
  { path: "", redirectTo: "/camerastatus", pathMatch: "full" },
  {
    path: "camerastatus",
    component: CameraStatusComponent,
    data: { title: "Camera Status" },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
