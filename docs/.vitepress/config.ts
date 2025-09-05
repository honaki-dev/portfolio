import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'Honaki',
    titleTemplate: false,
    head: [
        [
            'link',
            {
                rel: 'icon',
                type: 'image/jpg',
                href: '/tsukasa.jpg',
            },
        ],
    ],
    themeConfig: {
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/honaki-dev',
            },
        ],
    },
});
