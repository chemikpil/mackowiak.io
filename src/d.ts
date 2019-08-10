// Need this to import non typescript content inside typescript files 

declare module '*.svg' { const value: any; export = value; }
declare module '*.png' { const value: any; export = value; }
declare module '*.jpg' { const value: any; export = value; }