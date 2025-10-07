import { Controller, Get, Render } from '@nestjs/common';
import { GalleryService } from './gallery.service';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Get()
  @Render('gallery')
  findAll() {
    const images = this.galleryService.findAll();
    return { images };
  }
}
