import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text: string;
  @Input() isSecondary: boolean;
  @Input() disabled: boolean;
  @Input() type = 'button';

  @Output() clickBtn = new EventEmitter<void>();

  onClick(): void {
    this.clickBtn.emit();
  }
}

