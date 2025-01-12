declare module 'react-slick' {
    import { ReactNode } from 'react';

    interface Settings {
        dots?: boolean;
        infinite?: boolean;
        speed?: number;
        slidesToShow?: number;
        slidesToScroll?: number;
        autoplay?: boolean;
        autoplaySpeed?: number;
    }

    export default function Slider(props: { children?: ReactNode; settings?: Settings }): JSX.Element;
} 