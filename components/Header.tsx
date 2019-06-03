export const defaultTitle = 'Airport Departures';

interface Props {
    title : string
}

export const Header = ({title}: Props) => <h1>{title}</h1>