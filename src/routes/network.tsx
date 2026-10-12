import { createFileRoute } from '@tanstack/react-router';
import { NetworkPage } from '@/components/community/pages';
export const Route = createFileRoute('/network')({
 head: () => ({ meta: [
 {title: 'Your Network | YURIMATSU'},
 {name:'description',content:'Meet international entrepreneurs, innovation professionals, and business partners.'},
 {property:'og:title',content:'Your Network | YURIMATSU'},
 {property:'og:description',content:'Meet international entrepreneurs, innovation professionals, and business partners.'},
 {property:'og:type',content:'website'},
 {name:'twitter:card',content:'summary_large_image'},
 ] }),
 component: Page,
});
function Page(){return <NetworkPage/>;}
