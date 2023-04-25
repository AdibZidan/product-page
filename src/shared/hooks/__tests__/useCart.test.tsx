import { CartProvider } from '@context';
import { useCart } from '@hooks';
import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { describe, expect, it } from 'vitest';

describe('#useCart()', () => {
  it('returns initial cart values', () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: ({ children }) => <CartProvider>{children}</CartProvider>,
    });

    expect(result.current.totalItems).toBe(0);
    expect(result.current.totalAmount).toBe(0);
    expect(result.current.isCartShown).toBe(false);
    expect(result.current.isCartAdded).toBe(false);
  });

  it('increments cart count and amount', () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: ({ children }) => <CartProvider>{children}</CartProvider>,
    });

    act(result.current.incrementCartCount);

    expect(result.current.totalItems).toBe(1);
    expect(result.current.totalAmount).toBe(125);
  });

  it('decrements cart count and amount if there is at-least one item', () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: ({ children }) => <CartProvider>{children}</CartProvider>,
    });

    act(result.current.incrementCartCount);
    act(result.current.incrementCartCount);
    act(result.current.incrementCartCount);
    act(result.current.decrementCartCount);

    expect(result.current.totalItems).toBe(2);
    expect(result.current.totalAmount).toBe(250);
  });

  it('does not decrement cart count and amount if there is no item', () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: ({ children }) => <CartProvider>{children}</CartProvider>,
    });

    act(result.current.decrementCartCount);

    expect(result.current.totalItems).toBe(0);
    expect(result.current.totalAmount).toBe(0);
  });

  it('adds to the cart', () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: ({ children }) => <CartProvider>{children}</CartProvider>,
    });

    act(result.current.addToCart);

    expect(result.current.isCartAdded).toBe(true);
  });

  it('shows the cart', () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: ({ children }) => <CartProvider>{children}</CartProvider>,
    });

    act(result.current.showCart);

    expect(result.current.isCartShown).toBe(true);
  });

  it('hides the cart', () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: ({ children }) => <CartProvider>{children}</CartProvider>,
    });

    act(result.current.hideCart);

    expect(result.current.isCartShown).toBe(false);
  });

  it('resets the cart', () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: ({ children }) => <CartProvider>{children}</CartProvider>,
    });

    act(result.current.incrementCartCount);
    act(result.current.incrementCartCount);
    act(result.current.incrementCartCount);
    act(result.current.decrementCartCount);
    act(result.current.resetCart);

    expect(result.current.totalItems).toBe(0);
    expect(result.current.totalAmount).toBe(0);
    expect(result.current.isCartShown).toBe(true);
    expect(result.current.isCartAdded).toBe(false);
  });
});
