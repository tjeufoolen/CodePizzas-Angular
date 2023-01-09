import { Component, Input } from '@angular/core';
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'cp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() icon?: IconDefinition;
}
