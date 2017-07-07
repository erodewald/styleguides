// Let TypeScript know it can import .scss files
declare module '*.scss' {
    const content: any;
    export = content;
}
