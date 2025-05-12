import { VisionGameConfig, HearingGameConfig } from '../types';

export const visionGames: VisionGameConfig[] = [
  {
    id: 'vision-game-1',
    title: 'Vision Impairment Challenge',
    options: ['Sakthiman', 'Hero', 'Haunted school', 'He-man'],
    correctOption: 'He-man',
    description: 'Experience the frustration of encountering images without alt text.',
    instructions: 'Find the cartoon character in the following image.',
    imageSrc: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/12/untitled-design-58.jpg?q=70&fit=crop&w=1140&h=&dpr=1',
    explanation: 'The best practice we learn from here is to use proper alt value for images such that people with visual impairments also can understand the context via screen readers.'
  }
];

export const hearingGames: HearingGameConfig[] = [
  {
    id: 'hearing-game-1',
    title: 'Hearing Impairment Challenge',
    options: ['Definitely not', 'HR team will let you know shortly', 'Release of pali will be the best surprise for me', 'Only tech related questions in this townhall'],
    correctOption: 'Release of pali will be the best surprise for me',
    description: 'Experience the frustration of watching videos without captions or transcriptions.',
    instructions: 'What would Sridhar replied for the question, "What gifts and surprises do we have for this New Year?"',
    videoSrc1: 'https://drive.google.com/file/d/1-m-6bMaa0HcKoXh1LncP4uNg6mpc2U0g/preview',
    videoSrc2: 'https://drive.google.com/file/d/1z-8Qln74c0AoJnOnc0cF6SQ8QBVQqVIC/preview',
    explanation: 'The best practice we learn from here is to enable captions or transcriptions support for video contents such that people with hearing impairments also can understand the context.'
  },
  {
    id: 'hearing-game-2',
    title: 'Hearing Impairment Challenge',
    options: ['I actually got no interest for concerts', 'Fully loaded up with work', 'Booked some tickets for upcoming concerts', 'Not interested in recent times'],
    correctOption: 'Fully loaded up with work but i would like to go',
    description: 'Experience the frustration of watching videos without captions or transcriptions.',
    instructions: 'What would Sridhar replied for the question, "Do you find time to follow or go to any concerts? If so who is your favourite?"',
    videoSrc1: 'https://drive.google.com/file/d/10KZ-YzH4ruvX_y_vMZWor4BCJfHx39vn/preview',
    videoSrc2: 'https://drive.google.com/file/d/1avS283nsqQynBMqGVzwOYCyVYa4puLZu/preview',
    explanation: 'The best practice we learn from here is to enable captions or transcriptions support for video contents such that people with hearing impairments also can understand the context.'
  },
];

// imageSrc: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
// videoSrc: 'https://drive.google.com/file/d/1ZAFGPoQUZTVlD4y94POWXrWZ5q6Fcyv-/preview',
