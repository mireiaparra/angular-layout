import { Component, inject } from '@angular/core';
import { Gallery } from '../../../core/interfaces/gallery.interface';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ModalImageComponent } from './modal-image/modal-image.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  private readonly _dialog = inject(MatDialog);
  public gallery: Gallery[] = [
    {
      id: 1,
      src: 'images/image1.jpg',
      title: 'Image 1',
    },
    {
      id: 2,
      src: 'images/image2.jpg',
      title: 'Image 2',
    },
    {
      id: 3,
      src: 'images/image3.jpg',
      title: 'Image 3',
    },
    {
      id: 4,
      src: 'images/image4.jpg',
      title: 'Image 4',
    },
    {
      id: 5,
      src: 'images/image5.jpg',
      title: 'Image 5',
    },
    {
      id: 6,
      src: 'images/image6.jpg',
      title: 'Image 6',
    },
    {
      id: 7,
      src: 'images/image7.jpg',
      title: 'Image 7',
    },
    {
      id: 8,
      src: 'images/image8.jpg',
      title: 'Image 8',
    },
  ];
  public selectedImage: Gallery = this.gallery[0];
  public isPlaying: boolean = false;
  public slideshowInterval?: ReturnType<typeof setInterval>;
  public currentPage: number = 0;
  public pageSize: number = 3;

  public get paginatedGallery(): Gallery[] {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    return this.gallery.slice(start, end);
  }

  public get totalPages(): number {
    return Math.ceil(this.gallery.length / this.pageSize);
  }

  public selectImage(image: Gallery): void {
    this.selectedImage = image;
  }

  public nextImage(): void {
    const currentIndex = this.gallery.indexOf(this.selectedImage);
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;

    // Check if the current image is not the last one in the gallery
    if (currentIndex < this.gallery.length - 1) {
      // Check if the current image is not the last one in the current page
      if (currentIndex < end - 1) {
        this.selectedImage = this.gallery[currentIndex + 1];
      } else if (this.currentPage < this.totalPages - 1) {
        // Move to the next page and select the first image of the new page
        this.nextPage();
        this.selectedImage = this.paginatedGallery[0];
      }
    } else {
      // If the current image is the last one in the gallery, go back to the first image
      this.currentPage = 0;
      this.selectedImage = this.gallery[0];
    }
  }
  public previousImage(): void {
    const currentIndex = this.gallery.indexOf(this.selectedImage);
    const start = this.currentPage * this.pageSize;
    if (currentIndex > start) {
      this.selectedImage = this.gallery[currentIndex - 1];
    } else if (this.currentPage > 0) {
      this.previousPage();
      this.selectedImage = this.paginatedGallery[this.pageSize - 1];
    }
  }
  public isFirstImage(): boolean {
    return this.gallery.indexOf(this.selectedImage) === 0;
  }

  public isLastImage(): boolean {
    return this.gallery.indexOf(this.selectedImage) === this.gallery.length - 1;
  }

  public startSlideshow(): void {
    this.isPlaying = true;
    this.slideshowInterval = setInterval(() => {
      this.nextImage();
    }, 2000);
  }

  public stopSlideshow(): void {
    this.isPlaying = false;
    clearInterval(this.slideshowInterval);
  }

  public nextPage(): void {
    if ((this.currentPage + 1) * this.pageSize < this.gallery.length) {
      this.currentPage++;
    }
  }

  public previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  public openModal(): void {
    this._dialog.open(ModalImageComponent, {
      data: this.selectedImage,
    });
  }
}
