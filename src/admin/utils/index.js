import { clsx } from "clsx";

export function cn(...inputs) {
    return clsx(inputs);
}

export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-LK', {
        style: 'currency',
        currency: 'LKR',
        minimumFractionDigits: 2
    }).format(amount);
};
