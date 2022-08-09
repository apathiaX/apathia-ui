import { MaybeElementRef } from '@apathia/apathia.shared';
/**
 *
 * @param {Object} target dom el
 * @param {function} handler callback function
 *
 * @return {function} stop stop listen function
 */
export declare function onClickOutside(target: MaybeElementRef, handler: EventListener): () => void;
