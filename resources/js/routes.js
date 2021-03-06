import Logo from './components/Logo';
import LogoSymbol from './components/LogoSymbol';
import Colors from './components/Colors';
import Typography from './components/Typography';
import Mascot from './components/Mascot';
import Illustrations from './components/Illustrations';
import Wallpapers from './components/Wallpapers';
import SiteStats from './components/SiteStats';
import NotFound from './components/NotFound';
import Achievements from './components/Achievements';

let LoadersAndAnimations = () => import( /* webpackChunkName: "loaders" */'./components/LoadersAndAnimations');

export default {
    mode: 'history',

    linkActiveClass: 'font-bold',

    routes: [
        {
            path: '*',
            component: NotFound
        },
        {
            path: '/',
            component: Logo
        },
        {
            path: '/logo-symbol',
            component: LogoSymbol,
            name: 'logo-symbol'
        },
        {
            path: '/colors',
            component: Colors,
            name: 'colors'
        },
        {
            path: '/typography',
            component: Typography,
            name: 'typography'
        },
        {
            path: '/illustrations',
            component: Illustrations,
            name: 'illustrations'
        },
        {
            path: '/loaders-and-animations',
            component: LoadersAndAnimations,
            name: 'loaders-and-animations'
        },
        {
            path: '/mascot',
            component: Mascot,
            name: 'mascot'
        },
        {
            path: '/wallpapers',
            component: Wallpapers,
            name: 'wallpapers'
        },
        {
            path: '/site-stats',
            component: SiteStats,
            name: 'site-stats'
        },
        {
            path:'/achievements',
            component: Achievements,
            name: 'achievements'
        }
    ]
}