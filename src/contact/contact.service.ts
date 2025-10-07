import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContactDto } from './dto/create-contact.dto';
import { Contact } from './contact.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  create(createContactDto: CreateContactDto): Promise<Contact> {
    const contact = new Contact();
    contact.name = createContactDto.name;
    contact.email = createContactDto.email;
    contact.phone = createContactDto.phone;
    contact.help = createContactDto.help;

    return this.contactRepository.save(contact);
  }
}
