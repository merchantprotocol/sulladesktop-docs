import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import svgFiles from './svgfiles';

export default function SvgList() {
  // Set the limit of icons to display
  const limit = 20;

  // Use a Set to keep track of unique files
  const seenFiles = new Set();
  const uniqueSvgFiles = [];

  for (const svg of svgFiles) {
    if (!seenFiles.has(svg.file)) {
      seenFiles.add(svg.file);
      uniqueSvgFiles.push(svg);
    }
  }

  // Limit the number of icons displayed
  const limitedSvgFiles = uniqueSvgFiles.slice(0, limit);

  return (
    <ul className="AppList">
      {limitedSvgFiles.map((svg, i) => {
        const imgSource = useBaseUrl('img/connectors/' + svg.file);
        return (
          <li key={i} className="item">
            <a href={svg.url}>
              <img src={imgSource} alt={svg.file} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
