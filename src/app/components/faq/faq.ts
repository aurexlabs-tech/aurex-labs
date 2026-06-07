import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.scss'
})
export class Faq {
  activeId = signal<number | null>(null);
  activeCategory = signal<string>('Process');

  categories = ['Process', 'Pricing', 'Tech', 'Support'];

  faqs: FaqItem[] = [
    {
      id: 1,
      category: 'Process',
      question: 'How does your development process work?',
      answer: 'We follow an agile, milestone-based approach. Starting with a discovery call to understand your vision, we move into wireframing, then iterative development sprints with weekly demos so you always see real progress. You\'re never left in the dark — we\'re collaborators, not just vendors.',
    },
    {
      id: 2,
      category: 'Process',
      question: 'How long does a typical project take?',
      answer: 'Most projects land in the 4–12 week range depending on scope. A landing page or MVP can be live in as little as 2 weeks; a full-stack SaaS platform typically takes 8–14 weeks. We\'ll give you a precise timeline after the discovery phase.',
    },
    {
      id: 3,
      category: 'Pricing',
      question: 'How do you price your services?',
      answer: 'We offer two models: fixed-price for well-defined projects (no surprise invoices) and a monthly retainer for ongoing development or product teams that need a reliable dev partner. All quotes are transparent — you see exactly what you\'re paying for.',
    },
    {
      id: 4,
      category: 'Pricing',
      question: 'Do you offer any payment plans or installments?',
      answer: 'Yes. We typically structure payments in 3 milestones: 30% upfront, 40% at mid-point delivery, and 30% on final handoff. For retainer engagements, billing is monthly. We\'re flexible and happy to discuss arrangements that work for your cash flow.',
    },
    {
      id: 5,
      category: 'Pricing',
      question: 'What is the minimum budget you work with?',
      answer: 'Our minimum project engagement starts at ₹25,000 / $300 for smaller scopes. For ongoing retainers, the minimum is ₹40,000/month. We believe great software is an investment, and we ensure the ROI justifies every rupee.',
    },
    {
      id: 6,
      category: 'Tech',
      question: 'What technologies and stacks do you specialize in?',
      answer: 'We\'re full-stack engineers with deep expertise in Angular, React, Next.js, Node.js, NestJS, and cloud platforms (AWS, GCP). For mobile, we use Flutter and React Native. We choose the right tool for the job — not the fashionable one.',
    },
    {
      id: 7,
      category: 'Tech',
      question: 'Will I own the source code after the project?',
      answer: '100%. Upon final payment, you receive full intellectual property rights to all source code, assets, and documentation. We also hand over a clean GitHub repository with a proper README so any developer can maintain it going forward.',
    },
    {
      id: 8,
      category: 'Tech',
      question: 'Can you work with our existing codebase?',
      answer: 'Absolutely. Legacy modernization and codebase takeovers are one of our specialties. We do a thorough code audit first, flag technical debt, and propose a migration or refactor plan before touching anything.'
    },
    {
      id: 9,
      category: 'Support',
      question: 'Do you provide post-launch support and maintenance?',
      answer: 'Every project includes a 30-day bug-fix warranty at no extra cost. After that, we offer monthly maintenance retainers covering security patches, dependency updates, performance monitoring, and feature iterations. You\'re never abandoned after launch.',
    },
    {
      id: 10,
      category: 'Support',
      question: 'How do we communicate during the project?',
      answer: 'We set up a dedicated Slack channel (or Discord, WhatsApp — your preference) from day one. You\'ll also get access to a live project board on Notion or Linear so you can track every task in real time. Weekly video syncs are standard.',
    },
    {
      id: 11,
      category: 'Process',
      question: 'Can you sign an NDA before we discuss our idea?',
      answer: 'Absolutely, without hesitation. Confidentiality is a professional standard for us. We\'ll send you a mutual NDA before any detailed conversations. Your idea is safe with us.',
    },
    {
      id: 12,
      category: 'Support',
      question: 'What if I\'m not happy with the final output?',
      answer: 'We work iteratively with regular feedback loops, so surprises at the end are extremely rare. That said, if something doesn\'t meet the agreed spec, we fix it — no arguments, no extra charges. Client satisfaction isn\'t a slogan; it\'s our reputation.',
    }
  ];

  get filteredFaqs(): FaqItem[] {
    return this.faqs.filter(f => f.category === this.activeCategory());
  }

  toggle(id: number): void {
    this.activeId.set(this.activeId() === id ? null : id);
  }

  setCategory(cat: string): void {
    this.activeCategory.set(cat);
    this.activeId.set(null);
  }
}
