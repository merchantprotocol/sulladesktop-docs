import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import svgFiles from './svgfiles';

export default function SvgTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Logo</th>
          <th>Title</th>
          <th>Description</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {svgFiles.map((svg, index) => (
          <tr key={index}>
            <td>
              <img
                src={useBaseUrl('img/connectors/' + svg.file)}
                alt={svg.file}
                width="50"
                height="50"
              />
            </td>
            <td>
              {svg.file
                .replace(/-/g, ' ')
                .replace('.svg', '')
                .replace('.png', '')
                .replace('.jpg', '')
                .replace('.jpeg', '')
                .toUpperCase()}
            </td>
            <td>{svg.description}</td>
            <td>
              <a href={svg.url}>Documentation</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
