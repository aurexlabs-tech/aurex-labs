import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Mail, MessageCircle, ShieldCheck } from 'lucide-angular';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  readonly Mail = Mail;
  readonly MessageCircle = MessageCircle;
  readonly ShieldCheck = ShieldCheck;

  ngOnInit() {
    AOS.init({ once: true, offset: 50 });
  }
}