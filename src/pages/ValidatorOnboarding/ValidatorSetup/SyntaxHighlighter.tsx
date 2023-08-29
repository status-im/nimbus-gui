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
}
const SyntaxHighlighterBox = ({ rows }: SyntaxHighlighterBoxProps) => {
  return (
    <YStack>
      <SyntaxHighlighter
        language="bash"
        style={customStyle}
        showLineNumbers={true}
        lineNumberStyle={{ backgroundColor: '#E7EAEE', color: 'black' }}
      >
        {`${rows.join('\n')}`}
      </SyntaxHighlighter>
    </YStack>
  )
}
export default SyntaxHighlighterBox
