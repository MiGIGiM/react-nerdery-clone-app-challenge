import { useAsync } from '../../hooks/useAsync';
import {
    getFeaturedPlaylists,
    getCategoryPlaylists,
} from '../../services/spotify.service';
import { ResultCard } from '../../components/ResultCard';
import { HomeLayout } from '../../Layout/HomeLayout';
import { StyledFlexContainer } from '../../components/Styles/shared/FlexContainer.styles';
import styled from 'styled-components';
import { Onboarding } from '../../components/Onboarding';

const StyledH2 = styled.h2`
    color: white;
    margin-left: 20px;
    margin-bottom: 0px;
`;
const StyledContainer = styled.section`
    width: 100%;
`;

const Home = () => {
    const { data, loading } = useAsync(() => getFeaturedPlaylists());
    const { data: data2, loading: loading2 } = useAsync(() =>
        getCategoryPlaylists('dinner'),
    );

    return (
        <HomeLayout loading={loading && loading2}>
            <>
                <Onboarding />
                <StyledContainer>
                    {data && (
                        <>
                            <StyledH2>{data.message}</StyledH2>
                            <StyledFlexContainer
                                rowGap="20px"
                                overflowX="scroll"
                            >
                                {data.playlists.map((playlist) => (
                                    <ResultCard
                                        id={playlist.id}
                                        key={playlist.id}
                                        name={playlist.name}
                                        description={playlist.description}
                                        image={playlist.image}
                                    />
                                ))}
                            </StyledFlexContainer>
                        </>
                    )}
                </StyledContainer>
                <StyledContainer>
                    {data2 && (
                        <>
                            <StyledH2>Dinner</StyledH2>
                            <StyledFlexContainer
                                rowGap="20px"
                                overflowX="scroll"
                            >
                                {data2.playlists.map((playlist) => (
                                    <ResultCard
                                        id={playlist.id}
                                        key={playlist.id}
                                        name={playlist.name}
                                        description={playlist.description}
                                        image={playlist.image}
                                    />
                                ))}
                            </StyledFlexContainer>
                        </>
                    )}
                </StyledContainer>
            </>
        </HomeLayout>
    );
};

export default Home;
