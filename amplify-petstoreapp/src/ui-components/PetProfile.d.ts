/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PetProfileOverridesProps = {
    PetProfile?: PrimitiveOverrideProps<FlexProps>;
    Button6064520?: PrimitiveOverrideProps<ButtonProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    "Melinda Marcus"?: PrimitiveOverrideProps<TextProps>;
    color?: PrimitiveOverrideProps<TextProps>;
    breed?: PrimitiveOverrideProps<TextProps>;
    about?: PrimitiveOverrideProps<TextProps>;
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    Button29766907?: PrimitiveOverrideProps<ButtonProps>;
    Button6064476?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type PetProfileProps = React.PropsWithChildren<Partial<FlexProps> & {
    pet?: any;
} & {
    overrides?: PetProfileOverridesProps | undefined | null;
}>;
export default function PetProfile(props: PetProfileProps): React.ReactElement;
