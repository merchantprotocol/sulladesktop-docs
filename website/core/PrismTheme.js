/**
 * Merchant Protocol - Terminal-inspired Prism theme
 * Dark background with green accent coding colors
 */

const theme = {
  plain: {
    color: '#e6edf3',
    backgroundColor: '#0d1117',
  },
  styles: [
    {
      types: ['property'],
      style: {
        color: '#7ee787',
      },
    },
    {
      types: ['attr-name', 'comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#8b949e',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#6e7681',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['selector', 'char', 'builtin', 'url'],
      style: {
        color: '#79c0ff',
      },
    },
    {
      types: ['entity'],
      style: {
        color: '#7ee787',
      },
    },
    {
      types: ['atrule', 'inserted'],
      style: {
        color: '#3FB950',
      },
    },
    {
      types: ['important', 'variable', 'deleted'],
      style: {
        color: '#f85149',
      },
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['entity'],
      style: {
        cursor: 'help',
      },
    },
    {
      types: ['attr-name', 'keyword'],
      style: {
        color: '#ff7b72',
      },
    },
    {
      types: ['string', 'regex', 'attr-value'],
      style: {
        color: '#a5d6ff',
      },
    },
    {
      types: ['number', 'constant', 'symbol'],
      style: {
        color: '#79c0ff',
      },
    },
    {
      types: ['boolean'],
      style: {
        color: '#ff7b72',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: '#ffa657',
      },
    },
    {
      types: ['function'],
      style: {
        color: '#d2a8ff',
      },
    },
    {
      types: ['operator', 'tag'],
      style: {
        color: '#7ee787',
      },
    },
  ],
};

module.exports = theme;
