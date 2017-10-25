import path from 'path'

const styleLoaders = (useModules = true, minimize = false) => {
  console.log("Style Loaders", useModules , minimize)
  let cssLoaderOptions = {
    sourceMap: true,
    minimize: minimize
  }
  if (useModules) {
    cssLoaderOptions = { ...cssLoaderOptions,
      modules: true,
      localIdentName: '[name]__[local]___[hash:base64:5]'
    }
  }

  console.log("css Loader Options", cssLoaderOptions)

  return [
    {
      loader: 'css-loader',
      options: cssLoaderOptions
    }, {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        plugins: () => [
          require('autoprefixer')
        ],
        sourceMap: true
      }
    }, {
      loader: 'sass-loader',
      options: {
        includePaths: [path.resolve(__dirname, 'src', 'scss')],
        sourceMap: true
      }
    }
  ]
}

export {styleLoaders}
