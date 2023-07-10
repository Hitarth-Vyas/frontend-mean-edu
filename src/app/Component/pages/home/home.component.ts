import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  purposes = [
    {
      id: 1,
      content: 'Character plus Personality Development',
      url: '../../../../assets/home_img/purpose/1.png',
    },
    {
      id: 2,
      content: 'Meditation: The Best Medication',
      url: '../../../../assets/home_img/purpose/2.png',
    },
    {
      id: 3,
      content: 'Camping towards growth',
      url: '../../../../assets/home_img/purpose/3.jpg',
    },
    {
      id: 4,
      content: 'Optimizing brain power',
      url: '../../../../assets/home_img/purpose/4.png',
    },
    {
      id: 5,
      content: '1:1 discussion and personal guidance sessions',
      url: '../../../../assets/home_img/purpose/5.png',
    },
    {
      id: 6,
      content: 'Decode the philosophy and science of scriptures',
      url: '../../../../assets/home_img/purpose/6.jpg',
    },
  ];

  // Insta = [
  //   "https://www.instagram.com/p/CnCUyBnBzr7/embed",
  //   "https://www.instagram.com/reel/Cn1DB6TIaJn",
  //   "https://www.instagram.com/reel/CnzVWlToKoJ",
  //   "https://www.instagram.com/reel/CnuC_PNBxZj",
  //   "https://www.instagram.com/reel/Cm_oV8vhzGo",
  //   "https://www.instagram.com/reel/Cnehvh3BFmK",
  // ]

  // sanitizedVideos: SafeResourceUrl[] = [];
  // count: any;

  // constructor(private sanitizer: DomSanitizer) {
  //   this.sanitizedVideos = this.Insta.map((video) =>
  //     sanitizer.bypassSecurityTrustResourceUrl(video)
  //   );
  // }

  // trackByMethod(index: number): number {
  //   return (this.count = index);
  // }

  features = [
    {
      id: 1,
      icon: "bi bi-globe",
      content: "Connect to us from any corner of the world."
    },
    {
      id: 2,
      icon: "bi bi-people-fill",
      content: "Be a Member of the ever-growing intellectual community."
    },
    {
      id: 3,
      icon: "bi bi-bar-chart-line-fill",
      content: "Camps for personal and social development."
    },
    {
      id: 4,
      icon: "bi bi-clipboard2-data-fill",
      content: "Structured and Systematic holistic development."
    },
    {
      id: 5,
      icon: "bi bi-person-fill-check",
      content: "Be a Leader."
    },
  ]

  switch = [
    {
      before: "being with toxic friends",
      after: "desire to be taught by a mentor"
    },
    {
      before: "stuck in overthinking",
      after: "come to action"
    },
    {
      before: "blame to others",
      after: "take own responsibility"
    },
    {
      before: "insecure about the future",
      after: "plan ready for future"
    }
  ]

  faqs = [
    {
      question: "How can I also become Mentor?",
      answer: "You can complete the course and join us as a mentor. You can contribute as per your own schedule. Feel free to Contact us."
    },
    {
      question: "What are the benefits of courses?",
      answer: "In today's world there is urgent need of Spiritual Quotient and Emotional Quoient. We are providing the courses to develop them."
    },
    {
      question: "Who can join the camp?",
      answer: "The Camp is conducted after the Basic Course is completed. Only those who have attended the full course can register for the camp."
    },
    {
      question: "How can I add my relative or friend to join this Course?",
      answer: "Get him/her registered on our register page or contact us on whatsapp number +917412879735."
    }
  ]
}
