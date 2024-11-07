import path from 'path';
import { Configuration } from 'webpack';
import { IBuildPaths } from './config/build/types/config';
import { buildWebpack } from './config/build/buildWebpack';

const paths: IBuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
};

const mode = 'development';
const isDev = mode === 'development';
const config: Configuration = buildWebpack({
  mode: 'development',
  paths,
  isDev,
});

export default config;
