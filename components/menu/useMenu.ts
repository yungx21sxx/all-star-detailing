export default () => {
    const mobileMenuModal = useState('mobile-menu-modal', () => false);
    const openMobileMenuModal = () => mobileMenuModal.value = true;
    const closeMobileMenuModal = () => mobileMenuModal.value = false;
    const route = useRoute();
    const links = [
        {
            href: '/services/',
            text: 'Услуги',
        },
        {
            href: '/portfolio/',
            text: 'Портфолио',
        },
        {
            href: '/contacts',
            text: 'Контакты',
        },
    ];

    const computedLinks = computed(() => {
        return links.map(link => ({
            ...link,
            variant: (route.fullPath === link.href) ? 'tonal' : 'text'
        }))
    })

    return {
        mobileMenuModal,
        computedLinks,
        openMobileMenuModal,
        closeMobileMenuModal
    }
}