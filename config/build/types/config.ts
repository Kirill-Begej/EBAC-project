export type TBuildMode = 'development' | 'production';

export interface IBuildEnv {
  mode: TBuildMode;
  port: number;
}

export interface IBuildPaths {
  entry: string;
  output: string;
  html: string;
}

export interface IBuildOptions {
  mode: TBuildMode;
  port: number;
  paths: IBuildPaths;
  isDev: boolean;
  src: string;
}
