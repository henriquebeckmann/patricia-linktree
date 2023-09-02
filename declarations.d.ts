declare module '@iconscout/react-unicons' {
  import { SVGProps } from 'react';

  export type IconProps = {
    color?: string;
    size?: string | number;
  } & SVGProps<SVGElement>;

  export type Icon = (props: IconProps) => JSX.Element;

  export const UilWhatsapp: Icon;
  export const UilMapMarker: Icon;
  export const UilStore: Icon;
}
