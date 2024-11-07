import path from 'path';
import { Configuration } from 'webpack';
import { IBuildEnv, IBuildPaths } from './config/build/types/config';
import { buildWebpack } from './config/build/buildWebpack';

export default (env: IBuildEnv) => {
  const mode = env.mode || 'development';
  const isDev = mode === 'development';

  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  const config: Configuration = buildWebpack({
    mode: env.mode ?? 'development',
    port: env.port ?? 3000,
    paths,
    isDev,
  });

  return config;
};
