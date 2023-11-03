
 
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { Button } from "tamagui";

// This is just a sample row renderer. Adjust according to your data.
function Row(props: any) {
  const { index, style } = props;
  return (
    <div style={style}>
      <Button>{`Row ${index}`}</Button>
    </div>
  );
}

function LogsTerminal() {
  // Sample itemCount & loadMoreItems for demonstration purposes.
  const itemCount = 1000;
  const loadMoreItems = (startIndex: number, stopIndex: number) => {
    console.log("Loading more items from:", startIndex, "to", stopIndex);
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const isItemLoaded = (index: number) => {
    // Add your logic here to check if the item is already loaded or not.
    return false;
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={itemCount}
        loadMoreItems={loadMoreItems}
      >
        {({ onItemsRendered, ref }) => (
          <List
            height={400}
            itemCount={itemCount}
            itemSize={35}
            onItemsRendered={onItemsRendered}
            ref={ref}
            width={'100%'}
          >
            {Row}
          </List>
        )}
      </InfiniteLoader>
    </div>
  );
}

export default LogsTerminal;
