import { YStack } from 'tamagui'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'
type SyntaxHighlighterBoxProps = {
  rows: string[]
}

const customStyle = {
  ...solarizedlight,
  'pre[class*="language-"]': {
    ...solarizedlight['pre[class*="language-"]'],
    backgroundColor: 'white',
  },
  backgroundColor: 'white',
}
const SyntaxHighlighterBox = ({ rows }: SyntaxHighlighterBoxProps) => {
  return (
    <SyntaxHighlighter
      language="bash"
      showLineNumbers={true}
      lineNumberStyle={{ backgroundColor: '#E7EAEE' }}
      lineNumberContainerStyle={{ color: 'black' }}
      customStyle={customStyle}
    >
      {`${rows.join('\n')}`}
    </SyntaxHighlighter>
  )
}
export default SyntaxHighlighterBox
