'use client'
import React from 'react'
import Markdown from 'markdown-to-jsx';

const Markdowns = ({ content }: Markdown) => {
    const renderMarkdown = (content: string) => {
        const lines = content.trim().split('\n');
        const elements: JSX.Element[] = [];

        for (let index = 0; index < lines.length; index++) {
            const line = lines[index].trim();
            // Handle lines starting with `- **`
            if (line.startsWith('- **')) {
                const startIndex = line.indexOf('** ');
                const endIndex = line.lastIndexOf('**');
                if (startIndex !== -1 && endIndex !== -1 && startIndex !== endIndex) {
                    const label = line.substring(startIndex + 2, endIndex).trim();
                    const formattedLine = line.replace(`** ${label}**`, '').replace('- ', '');
                    elements.push(
                        <li key={`job-detail-${index}`}>
                            <strong>{label}</strong> {formattedLine}
                        </li>
                    );
                }
            }
            else if (line.startsWith('## ')) {
                // Handle headers
                const headerText = line.replace('## ', '');
                elements.push(<h2 className='text-[18px] font-bold mb-[5px] ' key={`header-${index}`}>{headerText}</h2>);
            } else if (line.startsWith('- ')) {
                // Handle list items
                const listItemText = line.replace('- ', '');
                elements.push(<li key={`list-item-${index}`}>{listItemText}</li>);
            } else if (line.startsWith('---')) {
                // Handle horizontal rules
                elements.push(<p className='opacity-0' key={`hr-${index}`}>Next Line</p>);
            } else {
                // Default case for paragraphs
                elements.push(<p key={`paragraph-${index}`}><Markdown>{line}</Markdown></p>);
            }
        }

        return elements;
    };
    return (
        <>
            {renderMarkdown(content)}
        </>
    )
}

export default Markdowns