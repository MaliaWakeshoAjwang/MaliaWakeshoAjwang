interface TimelineItem {
  icon: string;
  title: string;
  date: string;
  description: string;
  carouselItems: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
  }[];
  skills: string[];
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    avatarUrl: string;
  };
  caseStudy?: {
    description: string;
  };
}

export const timelineData: TimelineItem[] = [
  {
    icon: 'code',
    title: 'Personal Portfolio Website',
    date: 'Summer 2022 - First Steps in Web Development',
    description: 'The very site you are on. This project was my initial dive into modern web development, focusing on responsive design and clean user interfaces.',
    carouselItems: [
      {
        type: 'image',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApugU9MOfHR9l7lAx5sr4mBXoMLWnkVqRYfTHlnnQteKyPyKftma1hlCnIOMkvtgrn8-i6ttFkhPGon9DCy0p_cKlwo8YT-3p6baLcHh_j4QS7Dvs51bYfbyXnjLEVE9EEexguiGXTIOAMXNAMofJPxa8vt3ebEYtmHR_uOJzbvKNEVDKYdiBV3SnJ0zqb0klwMkLqmq40RE_OBAqclC0iWjWA_uMhDeJ7JHuui214aXPSmsjMIw-_ju69Z3XKolPHEp6_nbVTxjk',
        alt: 'Project screenshot 1'
      },
      {
        type: 'image',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCd2tEaw6-tepvhqtLv1ftJcl2bbo-9fCZOKCLTHkzXuNiK9rFX7TuuRv175l_vqCmvdp1tnBdKvKFMf_j5j_Gg8Nfz-63O3RnsKnM-z8nttONRj3dV0h1tCq6DMtfu5ZuQHzOdMmDlH-MLmJ499mFnd9CnK_OxoYxHn60VrlHpBG0z49IXLBO4Caqk5I8o4FQBaAcCtkCIrrsbonAkPoGkn0-o2NkTDtfaarbb8zpnzLrllY6bus8uYpyIVUjB468zZv1Nvp5rSEw',
        alt: 'Project screenshot 2'
      },
      {
        type: 'video',
        src: 'https://videos.pexels.com/video-files/3254013/3254013-uhd_2732_1440_25fps.mp4'
      }
    ],
    skills: [
      'HTML5 Semantic Structure',
      'CSS3 & Responsive Design (Tailwind CSS)',
      'Basic JavaScript DOM manipulation',
      'Version Control (Git)'
    ],
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'Git']
  },
  {
    icon: 'shopping_cart',
    title: 'E-commerce Platform',
    date: 'Fall 2022 - Diving into Full-Stack Development',
    description: 'A full-stack e-commerce solution with features like product catalog, shopping cart, and payment gateway integration. This project significantly deepened my understanding of database management and API design.',
    carouselItems: [
      {
        type: 'image',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEWPEwMaemO7wAFYA9KN7m34qHrRspBCSomHBiYvhc9aBEmKXqX8XQhRFB7c9QBgjXLXjhtX5pgKslbX2q7zn7lURiMPQTNUyjfLmeqX2REt4JJwoSqabpwa33m4GDHRYjEIDal7mA50oT4wcu6mTMrEpCWbPp7REvUm6aiy7AdtM0kgy-qA7kxu40OOpdIrz1rQYsq6l91_5NLbpf2VrHdCxmXS-hQ4YMJchfv2ZVLY3PxLB3jlGemsUungGjvLVYl8LcCOxS6Yg',
        alt: 'Project screenshot 1'
      },
      {
        type: 'image',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3j4x5JbmiO9ABI4GSc1gjQIdrSSWGNxZ1-9jaSRBCPsD1kvBH_s7Pk2vTL_N6w45vj20VGvfa4eOBcZ1b25hQI1iVuQK_J-UDqFajWVNE7s32SPIumj6V9ZQVQxY5qCKjHHpzuyn9SBfBpd2y3FDiYKoMlup7zCVLOC1ARbEoa_0AgbJ1wGtpaEBr6hfEG3lg7e0QbUWQ9yfzhZB2k_H6YIkRDtyvfttv5lBNy_LxpV1MKeAbugduESIX3GNHQgZKoYIrZhsxJIQ',
        alt: 'Project screenshot 2'
      }
    ],
    testimonial: {
      quote: 'Alex delivered an exceptional product that exceeded our expectations. The platform is robust, user-friendly, and has significantly boosted our online sales.',
      author: 'Sarah Johnson, CEO of ShopSphere',
      avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcKSspGI_RlEokz0N4sHvdqTqaHN7qzfuIJvLKrS4QUrq_d7RoEKsXul6O5d5YjJOW6dXE892g1T195C-lvoZxJtQT8heywx3-ZbQQ3J5naFAyCjuNaTqCeXiRgPACnHcMAn0DmahwB_Nh83I1Lcs37Yx5Q0DPqCDgh-XZw1veNV5HqxHFCdWPo9m9jNIsLtYqLIRRjrEL-s42_mC-_iTTwXuv4oobgL8w0-4_vV8VNqtpp3eKKeg5Tp1bpI7ZRX0Zvj_JJbmz7U8'
    },
    skills: [
      'Backend Development (Node.js/Express)',
      'Database Management (MongoDB)',
      'RESTful API Design',
      'Frontend Frameworks (React)',
      'Payment Gateway Integration'
    ],
    technologies: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'Stripe API']
  },
  {
    icon: 'sports_handball',
    title: 'Mobile Fitness App',
    date: 'Spring 2023 - Exploring Mobile Development',
    description: 'A cross-platform mobile app to track workouts, set fitness goals, and monitor progress. This project challenged me to consider user experience on smaller screens and optimize for performance.',
    carouselItems: [
      {
        type: 'image',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3QZApRZTcb6SHxTFhPjBr6AW8j27hlCiW4yFiSjj0ZAh0pf8zs8ie05oQrCgncUTHGbS9DFHsD5RzEt6yurRc_rHy3K7ssSJPB3KjmnQrRFU86STER-8dit1erS6ofv1Co4rlBR0IGubUmO_kwQ9Y3GdBMVej8WfPg8wnYmzXo7LsaO-Rv7M88bnj-uoo90jTqcxQHpqC6eDVheAUK8Dxz4aMDnSWHj_DbtcvbLCsGaJFqDODfzQMnoGA05F00859_PktWxugl84',
        alt: 'Project screenshot 1'
      },
      {
        type: 'image',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZiiQ1nlsiq0f7eL1x0tuSL7oAipeqZyfl3xfqD3fIu-EXMolcabByt0Zidl5P8pzrqkgDEgDIlU80LlB96nPPXDKhEJF0VrJKWvMH5qBPi650ir7FUdQdofMwDF0owqPRQa-8l3QDFrAO2QQoZis7UENzHLkHaWkyo8GAJoOXlc1nr4WovraLzdak2XmemjJKsn7ioLNllvYNZ4kVyTxsiK7GpWt9iBoPgVY2Jixn8Y_j-9_4HcH3v4v-dI5O6Fp4dYrFkMsOHY8',
        alt: 'Project screenshot 2'
      }
    ],
    skills: [
      'Mobile UI/UX Design',
      'Cross-platform Development',
      'State Management in React Native',
      'Local Storage & Data Persistence'
    ],
    technologies: ['React Native', 'Expo', 'AsyncStorage']
  },
  {
    icon: 'bar_chart',
    title: 'Data Visualization Dashboard',
    date: 'Summer 2023 - Mastering Data Presentation',
    description: 'An interactive dashboard for visualizing complex datasets using D3.js, providing insightful analytics. This project honed my ability to transform raw data into understandable and actionable visual insights.',
    carouselItems: [
      {
        type: 'image',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY5F24tG52bjCifP0jkhEiBgd6xsrN6sUOOG6fN_i9Bux1HjtkWJ5rlNE1hqCVnlbBUmIJxl_lCwuMOBns2iMpKqEDjPx9Y0XGRo1N9k8PLAjKKJptOr-Z8alVo9XEKiMQHgzBDFf98K8HxiN7qGSqLnraTYpc8TgpJZx2aDl2oVPaBqaXncH5kekPgxf0kbNjx5cFSqykAIQ0tLPLfwA5U6W0KGk7TZl8wObfV92gvKxW9pE60fxfk65rNUgOX87oTHm439cAgDM',
        alt: 'Project screenshot 1'
      },
      {
        type: 'image',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDR28AkYrOXUeOYy8RCXb1ZLvPbXjmQtJ9X0yJtcbm30Kszywxwu1SXruXrWL_A-MqkHhQKaCJPYp3dZeRXrGSqZ5kL4NmuYuw6JWvLuyU8vHmPDBnU2k2LLGU8jUVnq5tu-iZQ6S9lTmq6q70a-B2AHNrrWLy7jjxnB13g_kEEz0RMNZbgAxIDeUkfpiUnsdXab6OR-uMygEGMo7d_wpKmF4dN9Y7oFHrWvKJHp3DC0s-lV8i4EaPPXsXUJkpHev_Lyl3bEQdXEFo',
        alt: 'Project screenshot 2'
      }
    ],
    caseStudy: {
      description: 'This case study details the process of designing and building the data visualization dashboard, highlighting the challenges faced and the solutions implemented to handle large-scale data effectively.'
    },
    skills: [
      'Data Transformation & Parsing',
      'Interactive Chart Design',
      'SVG Manipulation with D3.js',
      'Handling Large Datasets'
    ],
    technologies: ['D3.js', 'JavaScript', 'REST APIs']
  },
  {
    icon: 'robot_2',
    title: 'AI-Powered Chatbot',
    date: 'Fall 2023 - Venturing into Artificial Intelligence',
    description: 'A conversational AI built with Python & TensorFlow. Capable of understanding and responding to natural language queries. This project was my introduction to machine learning principles and natural language processing.',
    carouselItems: [
      {
        type: 'image',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAeG7Sk4nLwfZHHysQF1naQL6W5Rxjzx3RdCzqZv1YOE0vQ-2YmQq_Vd1R4eCO47gH-sBHn8Abcwj0-VQSoy6dB6zkUZBV4LSZpbsur3ZCPJPtmaDAIu1RkI6-peGNflSoGHL3f1UbxDPcO-_nER_4uLCHCGARND3qtkhTL7Q26FyzVH74ig3veP57incGFzqyZHo9ZnPbDXvLV4WN4bbJ7WXDfycHoJM9aNYpDdxDGAU75g4iAoHBae2Uf46ZYzAQ7FdJLiRTols',
        alt: 'Project screenshot 1'
      },
      {
        type: 'image',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUp-TThjZuDR9AJPVALXMRmnzo1NwtUAf1XFkayvDwIlBeIBaDIbcbkVwUounjmUlIYg66XLweEj1mjMbc8vq5PtCaUkY1KFGaRgRivO2Ss5paujaPc51go0GO3TdX5L5veM1WNH9-hVTOms-D9XRwFVhyv1452YNW8vshNgxjtGwyiQfqDObwOhCvEnJO298Jn8p4cF-FBzvXs4_2ruR5CnfUMbUBMa8SrwevEo9qqrDK53DXdwN27aoVl0ciNquHGR-NC5zK0-o',
        alt: 'Project screenshot 2'
      }
    ],
    skills: [
      'Natural Language Processing (NLP)',
      'Machine Learning Model Training',
      'Deep Learning (Neural Networks)',
      'Python for Data Science'
    ],
    technologies: ['Python', 'TensorFlow', 'Keras', 'NLTK']
  }
];