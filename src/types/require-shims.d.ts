declare var require: {
    (path: string): string;
    (paths: string[], callback: (...modules: any[]) => void): string;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};
