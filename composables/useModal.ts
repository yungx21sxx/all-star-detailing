import type {IComplex} from "~/types/client";

export default () => {
    const modalSubmitIsOpen = useState<boolean>(() => false)
    const modalLoginIsOpen = useState<boolean>(() => false)
    const modalLkIsOpen = useState<boolean>(() => false)
    const useCurrentService = () => useState<string | null>('current-service', () => null)
    const useCurrentLoginStep = () => useState<'INFO' | 'LOGIN'>('current-login-step', () => 'LOGIN')

    const currentService = useCurrentService()
    const currentLoginStep = useCurrentLoginStep()
    const openSubmitModal = (serviceTitle: string | null): void => {

        currentService.value = serviceTitle

        modalSubmitIsOpen.value = true
    }

    const closeSubmitModal = (): void => {
        currentService.value = null
        modalSubmitIsOpen.value = false
    }

    const openLoginModal = (step: 'INFO' | 'LOGIN'): void => {
        currentLoginStep.value = step;
        modalLoginIsOpen.value = true;
    }

    const closeLoginModal = (): void => {
        modalLoginIsOpen.value = false
        currentLoginStep.value = 'LOGIN';
    }

    const openLkModal = (): void => {
        modalLkIsOpen.value = true
    }

    const closeLkModal = (): void => {
        modalLkIsOpen.value = false
    }

    return {
        modalSubmitIsOpen,
        openSubmitModal,
        closeSubmitModal,

        useCurrentService,
        useCurrentLoginStep,
        modalLoginIsOpen,
        openLoginModal,
        closeLoginModal,

        modalLkIsOpen,
        openLkModal,
        closeLkModal
    }
}