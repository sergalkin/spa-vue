import Logo from './components/Logo';
import LogoSymbol from './components/LogoSymbol';
import Colors from './components/Colors';
import Typography from './components/Typography';
import Illustrations from './components/Illustrations';
import LoadersAndAnimations from './components/LoadersAndAnimations';
import Mascot from './components/Mascot';
import Wallpapers from './components/Wallpapers';
import NotFound from './components/NotFound';

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
    ]
}