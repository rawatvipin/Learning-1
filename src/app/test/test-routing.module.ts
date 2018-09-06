import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PracticeComponent } from './practice/practice.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
const routes: Routes = [
    {
        path: 'practice', component: PracticeComponent
    },
    {
        path: 'directive', component: DirectiveComponent
    },
    {
        path: 'pipe', component: PipeComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TestRoutingModule { }