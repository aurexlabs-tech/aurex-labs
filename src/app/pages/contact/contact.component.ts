import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
import { FormsModule, NgForm } from '@angular/forms';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import emailjs from '@emailjs/browser';
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
  imports: [CommonModule, FormsModule, LucideAngularModule, RecaptchaModule, RecaptchaFormsModule],
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
  submissionStatus: 'idle' | 'success' | 'error' = 'idle';
  statusMessage: string = '';

  // EmailJS & Captcha Configuration
  emailjsConfig = environment.emailjs;
  
  // Google's official testing key, always passes. Replace with your actual Site Key!
  siteKey = environment.recaptcha.siteKey;
  captchaToken: string | null = null;

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

  captchaResolved(captchaResponse: string | null) {
    this.captchaToken = captchaResponse;
  }

  async onSubmit(form: NgForm) {
    if (this.isSubmitting) return;

    // Validate form fields
    if (form.invalid) {
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }
    
    // Check if reCAPTCHA is completed
    if (!this.captchaToken) {
      this.submissionStatus = 'error';
      this.statusMessage = "Please complete the 'I am not a robot' verification.";
      return;
    }

    this.isSubmitting = true;
    this.submissionStatus = 'idle';
    this.statusMessage = '';

    try {
      const templateParams = {
        fullName: this.formData.fullName,
        email: this.formData.email,
        company: this.formData.company || 'Not provided',
        projectType: this.formData.projectType,
        budget: this.formData.budget || 'Not specified',
        timeline: this.formData.timeline,
        details: this.formData.details,
        'g-recaptcha-response': this.captchaToken
      };

      await emailjs.send(
        this.emailjsConfig.serviceId,
        this.emailjsConfig.templateId,
        templateParams,
        {
          publicKey: this.emailjsConfig.publicKey,
        }
      );

      this.isSubmitting = false;
      this.submissionStatus = 'success';
      this.statusMessage = 'Message Sent! We will be in touch with you shortly.';
      
      // Clear form data on success
      form.resetForm();
      this.captchaToken = null; // Reset captcha state internally
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        if (this.submissionStatus === 'success') {
          this.submissionStatus = 'idle';
          this.statusMessage = '';
        }
      }, 5000);
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      this.isSubmitting = false;
      this.submissionStatus = 'error';
      this.statusMessage = 'There was an error sending your message. Please try again later.';
    }
  }
}