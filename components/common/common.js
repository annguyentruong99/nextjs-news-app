import {
    Home,
    NewReleasesOutlined,
    CategoryOutlined,
    BusinessOutlined,
    StarsOutlined,
    BallotOutlined,
    HealingOutlined,
    EmojiObjectsOutlined,
    SportsOutlined,
    PhoneAndroidOutlined,
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
        submenu: [
            {
                id: 3.1,
                label: 'Business',
                icon: <BusinessOutlined />,
                path: '/business',
            },
            {
                id: 3.2,
                label: 'Entertainment',
                icon: <StarsOutlined />,
                path: '/entertainment',
            },
            {
                id: 3.3,
                label: 'General',
                icon: <BallotOutlined />,
                path: '/general',
            },
            {
                id: 3.4,
                label: 'Health',
                icon: <HealingOutlined />,
                path: '/health',
            },
            {
                id: 3.5,
                label: 'Science',
                icon: <EmojiObjectsOutlined />,
                path: '/science',
            },
            {
                id: 3.6,
                label: 'Sports',
                icon: <SportsOutlined />,
                path: '/sports',
            },
            {
                id: 3.7,
                label: 'Technology',
                icon: <PhoneAndroidOutlined />,
                path: '/technology',
            },
        ],
    },
];
