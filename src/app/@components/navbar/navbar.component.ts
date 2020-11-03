import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'nabvar-component',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NabvarComponent {

    @Input() public isConfirm = false;
    @Output() public change = new EventEmitter<any>();
    //   title = 'challenge-lencina-martin';
    ir(name) {
        console.log(name)
        if (name == 'Review')
            this.isConfirm = false
        else
            this.isConfirm = true
        this.change.emit(this.isConfirm);
    }
}
