import { createFileRoute } from '@tanstack/react-router';
import { ExperiencesPage } from '@/components/community/pages';
export const Route = createFileRoute('/events')({
 head: () => ({ meta: [
 {title: 'Events | YURIMATSU'},
 {name:'description',content:'Thoughtfully curated international business gatherings and meaningful in-person connections.'},
 {property:'og:title',content:'Events | YURIMATSU'},
 {property:'og:description',content:'Thoughtfully curated international business gatherings and meaningful in-person connections.'},
 {property:'og:type',content:'website'},
 {name:'twitter:card',content:'summary_large_image'},
 ] }),
 component: Page,
});
function Page(){return <ExperiencesPage/>;}
