export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Matches', href: '/matches' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Team', href: '/team' },
  { label: 'Contact Us', href: '/contact' },
];

export const quickLinks = [
  ...navLinks,
  { label: 'Events', href: '/events' },
  { label: 'Admission', href: '/admission' },
  { label: 'Registration', href: '/registration' },
  { label: 'Membership', href: '/membership' },
  { label: 'News', href: '/news' },
  { label: 'Shopping', href: '/shopping' },
];

export const stats = [
  { icon: '🏆', value: '15+', label: 'Championships', text: 'National and regional victories.' },
  { icon: '👥', value: '10K+', label: 'Members', text: 'A passionate football family.' },
  { icon: '🌍', value: '25+', label: 'Countries', text: 'Fans across continents.' },
  { icon: '🥇', value: '100+', label: 'Awards', text: 'Sportsmanship and excellence.' },
];

export const matches = [
  { id: 1, title: 'Warriors vs Thunder FC', date: '12 July 2026', venue: 'Assam Arena', status: 'Upcoming', score: '7:30 PM' },
  { id: 2, title: 'Warriors vs River United', date: '20 July 2026', venue: 'City Ground', status: 'Upcoming', score: '6:00 PM' },
  { id: 3, title: 'Warriors vs Highland Stars', date: 'Last Match', venue: 'Home Stadium', status: 'Won', score: '3 - 1' },
];

export const players = [
  { name: 'Aman Singh', role: 'Captain / Forward', number: 9 },
  { name: 'Rohit Das', role: 'Midfielder', number: 7 },
  { name: 'Kabir Ali', role: 'Goalkeeper', number: 1 },
  { name: 'Dev Bora', role: 'Defender', number: 4 },
];

export const news = [
  { title: 'Training camp begins this week', text: 'The squad starts high-intensity practice sessions for the new season.' },
  { title: 'Youth trials opening soon', text: 'Young footballers can register for upcoming academy trials.' },
  { title: 'Captain message to fans', text: 'Unity, discipline and passion will guide our next campaign.' },
];

export const galleryImages = [
  { src: '/images/match.jpg', title: 'Match Night' },
  { src: '/images/match2.jpg', title: 'Power Kick' },
  { src: '/images/gallery-header-2.jpg', title: 'Green Warriors' },
  { src: '/images/swim.jpg', title: 'Team Spirit' },
];
