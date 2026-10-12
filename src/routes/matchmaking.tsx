import { createFileRoute } from '@tanstack/react-router';
import { MatchmakingPage } from '@/components/community/pages';
export const Route = createFileRoute('/matchmaking')({
 head: () => ({ meta: [
 {title: 'AI Matchmaking | YURIMATSU'},
 {name:'description',content:'Discover meaningful business connections through human-centered simulated matchmaking.'},
 {property:'og:title',content:'AI Matchmaking | YURIMATSU'},
 {property:'og:description',content:'Discover meaningful business connections through human-centered simulated matchmaking.'},
 {property:'og:type',content:'website'},
 {name:'twitter:card',content:'summary_large_image'},
 ] }),
 component: Page,
});
function Page(){return <MatchmakingPage/>;}
