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

  categories = ['Process', 'Pricing', 'Development', 'Support'];

  faqs: FaqItem[] = [
    {
      id: 1,
      category: 'Process',
      question: 'How does your development process work?',
      answer: 'We begin by understanding your business goals and project requirements. Once the plan is finalized, we design, develop, test, and share regular updates throughout the project until everything is ready for launch.',
    },
    {
      id: 2,
      category: 'Process',
      question: 'How long does a typical project take?',
      answer: 'The timeline depends on the project scope. A business website typically takes 2–4 weeks, while custom web applications may take 6–12 weeks. After our initial discussion, we will provide a clear project timeline.',
    },
    // {
    //   id: 3,
    //   category: 'Process',
    //   question: 'Can you sign an NDA before we discuss our idea?',
    //   answer: 'Yes. We are happy to sign a Non-Disclosure Agreement (NDA) before discussing your project to ensure your ideas and business information remain confidential.',
    // },

    {
      id: 4,
      category: 'Pricing',
      question: 'How do you price your services?',
      answer: 'Every project is different, so pricing depends on the features, complexity, and timeline. After understanding your requirements, we provide a clear and transparent quote with no hidden costs.',
    },
    {
      id: 5,
      category: 'Pricing',
      question: 'Do you offer payment milestones?',
      answer: 'Yes. Most projects are divided into milestones with payments linked to project progress. This keeps the process transparent and comfortable for both sides.',
    },
    {
      id: 6,
      category: 'Pricing',
      question: 'Do you provide a free project consultation?',
      answer: 'Yes. We offer a free consultation to understand your requirements, discuss possible solutions, and answer your questions before starting the project.',
    },

    {
      id: 7,
      category: 'Development',
      question: 'What technologies do you use?',
      answer: 'We primarily build modern websites and web applications using Angular, Node.js, Express.js, SQL, and related technologies. We always choose the tools that best fit your project requirements.',
    },
    {
      id: 8,
      category: 'Development',
      question: 'Will I own the source code after the project?',
      answer: 'Yes. Once the project is completed and the final payment is made, you will receive full ownership of the source code, project files, and related assets.',
    },
    {
      id: 9,
      category: 'Development',
      question: 'Can you work on an existing website or web application?',
      answer: 'Absolutely. Whether you need new features, bug fixes, performance improvements, or a complete redesign, we can work with your existing project.',
    },

    {
      id: 10,
      category: 'Support',
      question: 'Do you provide support after the project is completed?',
      answer: 'Yes. We provide post-launch support to fix issues, make updates, and help keep your website or web application running smoothly. Ongoing maintenance plans are also available if needed.',
    },
    {
      id: 11,
      category: 'Support',
      question: 'How do we communicate during the project?',
      answer: 'We keep communication simple and transparent. We provide regular progress updates and are available through email, phone, or your preferred communication platform.',
    },
    {
      id: 12,
      category: 'Support',
      question: 'What if I need changes after the project is delivered?',
      answer: 'No problem. We understand that requirements can evolve. We are happy to help with additional improvements, new features, or updates even after the project has been completed.',
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
