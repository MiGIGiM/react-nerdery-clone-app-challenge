import { StyledErrorBanner } from '../Styles/ErrorBanner/ErrorBanner.styles';
import { MdErrorOutline } from 'react-icons/md';

interface Props {
    message: string;
}

const ErrorBanner: React.FunctionComponent<Props> = ({ message }) => (
    <StyledErrorBanner data-testid="error-banner">
        <MdErrorOutline />
        <span data-test-id="error-banner">{message}</span>
    </StyledErrorBanner>
);

export default ErrorBanner;
