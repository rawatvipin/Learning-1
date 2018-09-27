import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './directive/directive.component';
import { PracticeComponent } from './practice/practice.component';
import { TestRoutingModule } from './test-routing.module';
import { TestDirective, Test2Directive } from './test.directive';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { TestPipe, FlyingHeroesPipe } from './test.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TestRoutingModule
  ],
  declarations: [DirectiveComponent, PracticeComponent,
    Test2Directive, TestDirective, TestPipe, FlyingHeroesPipe, PipeComponent, FormsComponent]
})
export class TestModule { }
