import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
    selector: 'app-modal-content',
    template: `
    <div class="modal-header">
        <h5 class="modal-title text-center">Get Started</h5>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body"> Whether you're looking to give sponsorship as a brand or seek sponsorship as an event creator, our platform has you covered!
    </div>
    <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-6 text-center">
                        <button (click)="openSponsorCreateForm()" class="btn btn-outline-danger btn-round m-2">I Want To Sponsor</button>
                    </div>
                    <div class="col-md-6 text-center">
                        <button (click)="openTargetComponent()" class="btn btn-outline-danger btn-round m-2" >I Need Sponsorship</button>
                  
                    </div>
                </div>
        </div>
    `
})
 export class NgbdModalContent {
    @Input() name;
    constructor(public activeModal: NgbActiveModal,private router: Router) {}
    public  openTargetComponent() {
        this.activeModal.close('Close click')
        this.router.navigate(['/recipientf']);
      }
    public  openSponsorComponent() {
        this.activeModal.close('Close click')
        this.router.navigate(['/sponsorf']);
      }  
        public  openSponsorCreateForm() {
            this.activeModal.close('Close click')
        this.router.navigate(['/sponsorcreateform']);

      }
}

@Component({
    selector: 'app-modal-component',
    templateUrl: './modal.component.html'
})
export class NgbdModalComponent {
    constructor(private modalService: NgbModal) {}
    open() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    }
}
