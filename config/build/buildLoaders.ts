import { ModuleOptions } from 'webpack';

export function buildLoaders(): ModuleOptions['rules'] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  return [
    typescriptLoader,
  ];
};
