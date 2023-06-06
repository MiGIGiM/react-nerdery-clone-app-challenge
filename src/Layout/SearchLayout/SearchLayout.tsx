import { PropsWithChildren } from 'react';
import {
    StyledDesktopLayout,
    StyledMainContentContainer,
} from '../Layout.styles';
import { DesktopAsideBar } from '../../components/DesktopAsideBar';
import { DesktopHeader } from '../../components/DesktopHeader';
import { SearchBar } from '../../components/SearchBar';

const SearchLayout: React.FC<PropsWithChildren> = ({ children }) => (
    <StyledDesktopLayout>
        <DesktopAsideBar />
        <StyledMainContentContainer>
            <DesktopHeader>
                <SearchBar />
            </DesktopHeader>
            {children}
        </StyledMainContentContainer>
    </StyledDesktopLayout>
);

export default SearchLayout;
