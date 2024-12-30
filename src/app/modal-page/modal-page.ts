import { Component, Input } from "@angular/core";
@Component({
    selector:'modal-component',
    templateUrl:'./modal-page.html',
    styleUrls:['./modal-page.css']
})

export class ModalComponent{
    @Input() table : number = 100;

    greater(){
        this.table *= 2;
    }

    losser(){
        this.table /= 2;
    }
    
}