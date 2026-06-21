import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  LucideAngularModule,
  Mail,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Check,
  ArrowRight,
  Rocket,
  User,
  AtSign,
  Building2,
  Briefcase,
  IndianRupee,
  CalendarClock,
  FileText,
  Clock,
} from 'lucide-angular';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  // Lucide Icons
  readonly Mail = Mail;
  readonly MessageCircle = MessageCircle;
  readonly ShieldCheck = ShieldCheck;
  readonly CheckCircle2 = CheckCircle2;
  readonly Check = Check;
  readonly ArrowRight = ArrowRight;
  readonly Rocket = Rocket;
  readonly User = User;
  readonly AtSign = AtSign;
  readonly Building2 = Building2;
  readonly Briefcase = Briefcase;
  readonly IndianRupee = IndianRupee;
  readonly CalendarClock = CalendarClock;
  readonly FileText = FileText;
  readonly Clock = Clock;

  // Form State
  isSubmitting = false;
  isSubmitted = false;

  formData = {
    fullName: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    details: '',
  };

  ngOnInit() {
    AOS.init({ once: true, offset: 50, duration: 700 });
  }

  onSubmit() {
    if (this.isSubmitting || this.isSubmitted) return;

    this.isSubmitting = true;

    // Simulate async submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.isSubmitted = true;
    }, 2000);
  }
}