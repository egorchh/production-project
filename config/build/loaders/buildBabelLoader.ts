import { BuildOptions } from '../types/types';
import babelRemovePropsPlugin from '../../babelRemovePropsPlugin';

interface BuildBabelProps extends BuildOptions {
    isTsx: boolean;
}

export function buildBabelLoader({ isDev, isTsx }: BuildBabelProps) {
    const isProd = !isDev;

    return {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: [
                    '@babel/preset-env',
                    ['@babel/preset-react', { runtime: 'automatic' }],
                    '@babel/preset-typescript',
                ],
                plugins: [
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTsx,
                        },
                    ],
                    ['@babel/plugin-transform-runtime'],
                    isTsx && isProd && [
                        babelRemovePropsPlugin(), { props: ['data-testid'] },
                    ],
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
            },
        },
    };
}
