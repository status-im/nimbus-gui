
import { LazyLog } from 'react-lazylog';

function LogsTerminal() {
  const lineStyle = {
    borderBottom: '1px solid #e0e0e0',
    fontFamily: 'Courier New, monospace',
    lineHeight: '1.5',
    fontSize: '14px',
  };

  const oddLineStyle = {
    ...lineStyle,
    backgroundColor: '#f7f7f7',
  };

  const lineContentStyle = {
    color: '#333',
  };

  return (
    <div>
      <LazyLog
        url="path_to_your_log_file.log"
        lineStyle={(lineNumber: number) => lineNumber % 2 === 0 ? lineStyle : oddLineStyle}
        textStyle={lineContentStyle}
      />
    </div>
  );
}

export default LogsTerminal;
