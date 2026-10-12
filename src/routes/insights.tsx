import { createFileRoute } from '@tanstack/react-router';
import { InsightsPage } from '@/components/community/pages';
export const Route = createFileRoute('/insights')({
 head: () => ({ meta: [
 {title: 'Global Insights | YURIMATSU'},
 {name:'description',content:'Explore international market intelligence, innovation trends, and community perspectives.'},
 {property:'og:title',content:'Global Insights | YURIMATSU'},
 {property:'og:description',content:'Explore international market intelligence, innovation trends, and community perspectives.'},
 {property:'og:type',content:'website'},
 {name:'twitter:card',content:'summary_large_image'},
 ] }),
 component: Page,
});
function Page(){return <InsightsPage/>;}
