declare module 'pretify-deep-diff' {
    interface Options {
        locale?: 'en' | 'ru';
        customTexts?: {
            added?: string;
            deleted?: string;
            edited?: string;
            arrayChange?: string;
            addedTitle?: string;
            deletedTitle?: string;
            editedTitle?: string;
            arrayChangeTitle?: string;
        };
    }

    interface Change {
        kind: 'N' | 'D' | 'E' | 'A';
        path?: (string | number)[];
        lhs?: any;
        rhs?: any;
        index?: number;
        item?: Change;
    }

    function pretifyDeepDiff(changes: Change[], options?: Options): string;

    export = pretifyDeepDiff;
}