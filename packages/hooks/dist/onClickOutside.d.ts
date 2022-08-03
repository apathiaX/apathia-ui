import { MaybeElementRef } from '@apathia/apathia.shared';
/**
 *
 * @param {Object} target dom el
 * @param {function} handler callback function
 * @param {scope} scope outside scope
 *
 * @return {function} stop stop listen function
 */
export declare function onClickOutside(target: MaybeElementRef, handler: EventListener): () => void;
export declare function useClickAwayFixIOS(): void;
