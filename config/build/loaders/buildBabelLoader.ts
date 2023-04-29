import { BuildOptions } from '../types/types';
import babelRemovePropsPlugin from '../../babelRemovePropsPlugin';

interface BuildBabelProps extends BuildOptions {
    isTsx: boolean;
}

export function buildBabelLoader({ isDev, isTsx }: BuildBabelProps) {
    return {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react',
                    '@babel/preset-typescript',
                ],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTsx,
                        },
                    ],
                    ['@babel/plugin-transform-runtime'],
                    isTsx && [
                        babelRemovePropsPlugin(), { props: ['data-testid'] },
                    ],
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
            },
        },
    };
}
