import { Directive, ElementRef, HostBinding, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Subscriber, Subscription } from 'rxjs';
import { TodosStoreService } from '../shared/todos-store.service';

@Directive({
  selector: '[disabledButton]'
})
export class DisabledButtonDirective implements OnInit, OnChanges, OnDestroy {
  subscriptions: Subscription[] = [];
  $submitedTodoForm: Subscription = null;
  @Input() controls: AbstractControl[];

  constructor(private el: ElementRef, private todosStore: TodosStoreService) { }

  ngOnInit() {
    this.setDisabeld();
    this.setSubscriptions();
  }

  ngOnChanges(_: SimpleChanges) {
    this.clear();
    this.setSubscriptions();
  }

  ngOnDestroy() {
    this.clear();
  }

  private setDisabeld() {
    if(this.el.nativeElement instanceof HTMLButtonElement && this.controls) {
      const isDirty = this.controls.reduce((a, c) => a || c.dirty, false);
      const isNotInvalid = this.controls.reduce((a, c) => a && !c.invalid, true);
  
      const enable = (isDirty) && (isNotInvalid);
      this.el.nativeElement.disabled = !(enable);
    }
  }

  private setSubscriptions() {
    if(this.controls) {
      this.controls.forEach((control) => {
        const subscription = control.valueChanges.subscribe(_ => this.setDisabeld());
        this.subscriptions.push(subscription);
      });

      this.$submitedTodoForm = this.todosStore.submitedTodoForm.subscribe(_ => this.setDisabeld());
    }
  }

  private clear() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
      this.subscriptions.unshift();
    });

    this.$submitedTodoForm?.unsubscribe();
  }
}
