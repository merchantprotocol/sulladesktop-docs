/**
 * DataRipple - Ghost Agent Prism theme
 * Dark navy background with orange accent coding colors
 */

const theme = {
  plain: {
    color: '#DFE7F4',
    backgroundColor: '#121B27',
  },
  styles: [
    {
      types: ['property'],
      style: {
        color: '#F7714A',
      },
    },
    {
      types: ['attr-name', 'comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#ADBFD6',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#7A8DA0',
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
        color: '#00B8D4',
      },
    },
    {
      types: ['entity'],
      style: {
        color: '#F7714A',
      },
    },
    {
      types: ['atrule', 'inserted'],
      style: {
        color: '#4CAF50',
      },
    },
    {
      types: ['important', 'variable', 'deleted'],
      style: {
        color: '#E53935',
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
        color: '#EA5428',
      },
    },
    {
      types: ['string', 'regex', 'attr-value'],
      style: {
        color: '#00B8D4',
      },
    },
    {
      types: ['number', 'constant', 'symbol'],
      style: {
        color: '#F7714A',
      },
    },
    {
      types: ['boolean'],
      style: {
        color: '#EA5428',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: '#FFA88A',
      },
    },
    {
      types: ['function'],
      style: {
        color: '#00B8D4',
      },
    },
    {
      types: ['operator', 'tag'],
      style: {
        color: '#F7714A',
      },
    },
  ],
};

module.exports = theme;
