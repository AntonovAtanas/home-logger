import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-empty-state',
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
      <div
        class="text-surface-700 dark:text-surface-100 text-center flex flex-col items-center gap-4"
      >
        <div
          class="text-surface-900 dark:text-surface-0 font-bold text-4xl leading-tight"
        >
          {{ emptyStateHeading() }}
        </div>
        <div
          class="text-surface-700 dark:text-surface-100 text-xl leading-normal"
        >
          {{ emptyStateMessage() }}
        </div>
        <button
          pButton
          [rounded]="true"
          class="mt-4"
          (click)="onEmptyStateButtonClick()"
        >
          <i pButtonIcon class="pi pi-plus"></i>
          <span pButtonLabel>{{ emptyStateButtonText() }}</span>
        </button>
      </div>
    </div>
  `,
})
export class EmptyStateComponent {
  emptyStateHeading = input<string>('');
  emptyStateMessage = input<string>('');
  emptyStateButtonText = input.required<string>();
  emptyStateButtonClick = output();

  onEmptyStateButtonClick() {
    this.emptyStateButtonClick.emit();
  }
}
