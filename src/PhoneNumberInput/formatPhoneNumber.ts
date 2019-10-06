export const formatPhoneNumber = (value = ''): string => {
    const digits = value.split('')
        .filter(c => c.match(/\d/));
    const areaCode = digits.slice(0, 3);
    const prefix = digits.slice(3, 6);
    const lineNumber = digits.slice(6, 10);
    const formatParts = ["(", ") ", "-"];

    return [areaCode, prefix, lineNumber]
        .reduce((acc: string[], part: string[], index: number) => {
            if (part.length) {
                return [...acc, formatParts[index], ...part];
            }
            return acc;
        }, [] as string[]).join('');
};
