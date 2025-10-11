import { timelineData } from '../timeline/data';

export interface Project {
  title: string;
  description: string[];
  technologies: string[];
  images: {
    src: string;
    alt: string;
    type?: 'image' | 'video';
  }[];
  links: {
    demo: string;
    github: string;
  };
}

export function getProjectBySlug(slug: string): Project | null {
  const timelineItem = timelineData.find(
    item => item.title.toLowerCase().replace(/ /g, '-') === slug
  );

  if (!timelineItem) return null;

  return {
    title: timelineItem.title,
    // Convert single description into an array for consistency with the project page format
    description: [timelineItem.description],
    technologies: timelineItem.technologies,
    images: timelineItem.carouselItems.map(item => ({
      src: item.src,
      alt: item.alt || item.src.split('/').pop() || 'Project image',
      type: item.type
    })),
    links: {
      demo: '#', // These would come from your actual project data
      github: '#'
    }
  };
}