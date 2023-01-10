import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export type Option = {
    name: string;
    value: string | number;
};

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
    @Input() group!: string;
    @Input() options: Option[] = [];
    @Input() @Output() selectedOption?: Option;
    @Input() icon?: IconDefinition;
    @Input() mutable = true;
    @Output() selectionChanged = new EventEmitter<string | number>();

    isOpen = false;

    ngOnInit(): void {
        if (this.selectedOption === undefined) {
            this.selectedOption = this.options[0];
        }
    }

    get dropdownIcon(): IconDefinition {
        return this.isOpen ? faChevronUp : faChevronDown;
    }

    get selectableOptions(): Option[] {
        return this.options
            .filter(x => x.value != this.selectedOption?.value)
            .sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
    }

    selectOption(option: Option): void {
        if (this.mutable) {
            this.selectedOption = option;
        }
        this.selectionChanged.emit(option.value);
        this.close();
    }

    open(): void {
        this.isOpen = true;
    }

    close(): void {
        this.isOpen = false;
    }
}
