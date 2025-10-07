import { Injectable } from '@nestjs/common';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { Gallery } from './entities/gallery.entity';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class GalleryService {
  findAll() {
    const galleryPath = path.resolve(__dirname, 'gallery.json');
    const galleryData = fs.readFileSync(galleryPath, 'utf8');
    return JSON.parse(galleryData);
  }
}
