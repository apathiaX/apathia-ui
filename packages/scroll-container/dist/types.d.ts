export declare type ScrollbarType = 'horizontal' | 'vertical';
export interface ScrollbarProps {
    move: number;
    length: number;
    size: number;
    hide?: boolean;
    type: ScrollbarType;
}
export declare type ContainerSize = 'thick' | 'normal' | 'thin' | number;
export interface ScrollContainerProps {
    size?: ContainerSize;
    tag?: string;
    scrollTop?: number;
    scrollLeft?: number;
    autoHide?: boolean;
    hideVertical?: boolean;
    hideHorizontal?: boolean;
}
