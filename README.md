# React Pagination

A simple React Pagination app for paginating data in your application.

## Features

- Easy-to-use pagination component for React applications.
- Supports TypeScript for static type checking.
- Customizable styling to match your application's design (styled-system).
- Built-in test cases for reliable functionality.
- Compatible with popular bundlers like Webpack.

## Installation

Clone the app (make sure to checkout develop branch):

```shell
git clone https://github.com/Hamzaahmed95/React-Pagination.git
```

Install the package from NPM using your package manager of choice:

```shell
npm install or yarn add 
```

## Dependencies
This component has the following dependencies:

- react (>= 16.8.0)
- react-content-loader (^6.2.1)
- react-error-boundary (^4.0.4)
- react-icons (^4.8.0)
- styled-components (^5.2.0)
- styled-system (^5.1.5)
- jest (^29.5.0)
- @testing-library/react (^14.0.0)

## TypeScript Support
This component is written in TypeScript and includes type definitions.

## Test Cases
This component includes test cases to ensure its functionality. You can run the tests using the following command:

```shell
npm run test
```

## Webpack Configuration
If you're using Webpack, make sure to configure it to handle TypeScript files and CSS modules:

```
const prod = process.env.NODE_ENV === 'development';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './index.tsx',
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.jpg$/,
        type: "asset/resource",
      },
    ]
  },
  devtool: prod ? undefined : 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
};
```
### Hosted
Enjoy playing with the code and give feedback, check out the deployed live code [here](https://react-pagination-hamza.netlify.app/)
