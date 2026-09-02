module.exports = {
  content: [
    './src/**/*.{html,jsx,tsx,js,ts}'
  ],
  input: './strata.css',
  output: './public/strata.output.css',
  // lightningcss measured smaller than cssnano on this output, both raw
  // (26,465 vs 26,848 bytes) and gzipped (6,010 vs 6,119 bytes), with zero
  // dropped declarations — explicit so a future strata-css version's auto
  // fallback logic can't silently switch this to cssnano.
  minifier: 'lightningcss',
  theme: {
    colors: {
      primary: '#7c3aed'
    }
  }
}
