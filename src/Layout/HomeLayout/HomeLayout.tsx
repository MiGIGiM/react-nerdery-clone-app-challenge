import { MobileNavbar } from '../../components/MobileNavbar';
import { FullPageLoader } from '../../components/Loaders/FullPageLoader';
import { PropsWithChildren } from 'react';
import { DesktopAsideBar } from '../../components/DesktopAsideBar';
import { DesktopHeader } from '../../components/DesktopHeader';
import { useLocation } from 'react-router';
import {
    StyledDesktopLayout,
    StyledMainContentContainer,
} from '../Layout.styles';

interface Props extends PropsWithChildren {
    loading: boolean;
}

const HomeLayout: React.FunctionComponent<Props> = ({ children, loading }) => {
    if (loading && screen.width <= 480) return <FullPageLoader />;

    if (screen.width <= 480)
        return (
            <>
                <MobileNavbar />
                {children}
            </>
        );

    return (
        <StyledDesktopLayout>
            <DesktopAsideBar />
            <StyledMainContentContainer>
                <DesktopHeader />
                {children}
            </StyledMainContentContainer>
        </StyledDesktopLayout>
    );
};

export default HomeLayout;
