import {
    Home,
    NewReleasesOutlined,
    CategoryOutlined,
} from '@material-ui/icons';

export const Nav = [
    {
        id: 1,
        label: 'Home',
        icon: <Home />,
        path: '/',
    },
    {
        id: 2,
        label: 'Breaking News',
        icon: <NewReleasesOutlined />,
        path: '/breakingnews',
    },
    {
        id: 3,
        label: 'Categories',
        icon: <CategoryOutlined />,
    },
];
