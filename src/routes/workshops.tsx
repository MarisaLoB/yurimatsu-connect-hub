import { createFileRoute } from '@tanstack/react-router';
import { ExperiencesPage } from '@/components/community/pages';
export const Route = createFileRoute('/workshops')({
 head: () => ({ meta: [
 {title: 'Live Workshops | YURIMATSU'},
 {name:'description',content:'Join live international workshops and exchange practical knowledge with global innovators.'},
 {property:'og:title',content:'Live Workshops | YURIMATSU'},
 {property:'og:description',content:'Join live international workshops and exchange practical knowledge with global innovators.'},
 {property:'og:type',content:'website'},
 {name:'twitter:card',content:'summary_large_image'},
 ] }),
 component: Page,
});
function Page(){return <ExperiencesPage workshops/>;}
