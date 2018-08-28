import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './directive/directive.component';
import { PracticeComponent } from './practice/practice.component';
import { TestRoutingModule } from './test-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  declarations: [DirectiveComponent, PracticeComponent]
})
export class TestModule { }
