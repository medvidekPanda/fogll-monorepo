import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss'],
})
export class ModalHeaderComponent {
  @Input() set closeModal(value: boolean) {
    if (value) {
      this.closeDetail();
    }
  }

  constructor(public modalController: ModalController) { }

  closeDetail() {
    this.modalController.dismiss({
      dismissed: true,
      changed: false,
    });
  }
}
