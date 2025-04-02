import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Gallery } from '../../../../core/interfaces/gallery.interface';
import { RotateDirective } from '../../../../shared/directives/rotate.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-modal-image',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, RotateDirective, MatButtonModule, MatDialogTitle, MatIconModule, MatTooltipModule],
  templateUrl: './modal-image.component.html',
  styleUrl: './modal-image.component.scss',
})
export class ModalImageComponent {
  public imageSize: number = 300;
  public rotationAngle: number = 0;
  public rotationStep: number = 10;

  constructor(
    public dialogRef: MatDialogRef<ModalImageComponent>,
    @Inject(MAT_DIALOG_DATA) public selectedImage: Gallery
  ) {}

  public increaseSize(): void {
    this.imageSize = Math.min(this.imageSize + 20, 500);
  }

  public decreaseSize(): void {
    this.imageSize = Math.max(this.imageSize - 20, 100);
  }

  public close(): void {
    this.dialogRef.close();
  }
}
