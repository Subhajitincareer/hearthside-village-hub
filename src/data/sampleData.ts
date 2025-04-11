
import { 
  Calendar, 
  School, 
  Heart, 
  Tractor, 
  LandPlot, 
  PiggyBank, 
  BadgeHelp, 
  ShieldCheck 
} from 'lucide-react';
import type { NewsItem } from '@/components/NewsCard';
import type { EventItem } from '@/components/EventCard';
import type { GalleryImage } from '@/components/PhotoGallery';
import type { ResourceItem } from '@/components/ResourceCard';

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Community Garden Expansion',
    excerpt: 'The Hearthside community garden will be expanding this spring with 10 new plots available for residents.',
    date: 'April 5, 2025',
    author: 'Mary Johnson',
    category: 'Community',
    imagePath: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3'
  },
  {
    id: '2',
    title: 'New Farmers Market Schedule',
    excerpt: 'Starting next month, our local farmers market will now be open twice weekly on Wednesdays and Saturdays.',
    date: 'April 3, 2025',
    author: 'Robert Davis',
    category: 'Events',
    imagePath: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3'
  },
  {
    id: '3',
    title: 'Road Improvements Coming Soon',
    excerpt: 'County officials have approved funding for improvements to Oak Lane and Pine Drive. Construction begins May 15.',
    date: 'March 28, 2025',
    author: 'Sarah Wilson',
    category: 'Infrastructure',
    imagePath: 'https://images.unsplash.com/photo-1523413363574-c41ccc057dcd?ixlib=rb-4.0.3'
  }
];

export const eventItems: EventItem[] = [
  {
    id: '1',
    title: 'Spring Planting Festival',
    description: 'Join us for our annual Spring Planting Festival with seed exchanges, workshops, and activities for all ages.',
    date: 'May 10, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Community Center',
    imagePath: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3'
  },
  {
    id: '2',
    title: 'Barn Dance & Potluck',
    description: 'Our monthly barn dance with live local music. Bring a dish to share for the community potluck.',
    date: 'April 20, 2025',
    time: '6:00 PM - 10:00 PM',
    location: 'Johnson\'s Barn',
    imagePath: 'https://images.unsplash.com/photo-1503843778847-2b8bdce2ed3d?ixlib=rb-4.0.3'
  },
  {
    id: '3',
    title: 'County Fair Planning Meeting',
    description: 'Planning meeting for our booth at this year\'s county fair. All volunteers welcome!',
    date: 'April 15, 2025',
    time: '7:00 PM - 8:30 PM',
    location: 'Town Hall',
    imagePath: 'https://images.unsplash.com/photo-1556918326-f3ecb73ef375?ixlib=rb-4.0.3'
  }
];

export const resourceItems: ResourceItem[] = [
  {
    id: '1',
    title: 'Local Schools',
    description: 'Information about schools in our area, including bus schedules and important dates.',
    icon: <School size={32} />,
    link: '/resources/schools',
    isExternal: false
  },
  {
    id: '2',
    title: 'Healthcare Services',
    description: 'Local doctors, clinics, and emergency services in the surrounding area.',
    icon: <Heart size={32} />,
    link: '/resources/healthcare',
    isExternal: false
  },
  {
    id: '3',
    title: 'Agricultural Resources',
    description: 'Farming tips, equipment sharing, and agricultural assistance programs.',
    icon: <Tractor size={32} />,
    link: '/resources/agriculture',
    isExternal: false
  },
  {
    id: '4',
    title: 'Land Management',
    description: 'Information on sustainable land management practices and local regulations.',
    icon: <LandPlot size={32} />,
    link: '/resources/land-management',
    isExternal: false
  },
  {
    id: '5',
    title: 'Financial Services',
    description: 'Banking, grants, and financial assistance programs for rural residents.',
    icon: <PiggyBank size={32} />,
    link: '/resources/financial',
    isExternal: false
  },
  {
    id: '6',
    title: 'Community Support',
    description: 'Volunteer opportunities and community assistance programs.',
    icon: <BadgeHelp size={32} />,
    link: '/resources/support',
    isExternal: false
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3',
    alt: 'Deer in meadow at dusk',
    caption: 'Deer grazing in Wilson\'s meadow at sunset'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3',
    alt: 'River flowing through forest',
    caption: 'Spring at Cottonwood Creek'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3',
    alt: 'Pine forest in morning light',
    caption: 'Morning fog in the northern pines'
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3',
    alt: 'Looking up at tall trees',
    caption: 'Ancient oaks in the community preserve'
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3',
    alt: 'Sunlight through tree leaves',
    caption: 'Summer light through the maple grove'
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3',
    alt: 'Lake surrounded by autumn trees',
    caption: 'Fall colors at Mirror Lake'
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3',
    alt: 'Mountain vista',
    caption: 'View from Ridgeline Trail'
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3',
    alt: 'Sheep in pasture',
    caption: 'Thompson family farm sheep'
  }
];
