

import { useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

import { Stack, XStack } from 'tamagui';

type DataType = {
  option: string;
  description: string;
};

interface RowProps {
  data: DataType | undefined;
  index: number;
}

const Row: React.FC<RowProps> = ({ data, index }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  const { option, description } = data;
  return (
    <XStack style={{ fontFamily: 'monospace' }}>
      <Stack style={{ alignContent: 'flex-start', padding: '0 12px', marginRight: '20px', backgroundColor: '#f5f6f8', color: '#A1ABBD' }}>
        {index}
      </Stack>
      <Stack style={{ alignContent: 'flex-start', marginRight: '20px', minWidth: '110px' }}>
        {option}
      </Stack>
      <Stack>
        {description}
      </Stack>
    </XStack>
  );
};

const LogsTerminal: React.FC = () => {
  const [data, setData] = useState<(DataType | undefined)[]>([]);
  useEffect(() => {
    const exampleData: DataType[] =
      [
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--config-file",
          "description": "Loads the configuration from a TOML file."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },
        {
          "option": "--log-level",
          "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
        },

      ]
    const initialData = [...exampleData, ...Array(500 - exampleData.length).fill(undefined)];
    setData(initialData);
  }, []);

  const isItemLoaded = (index: number): boolean => index < data.length && data[index] !== undefined;

  const loadMoreItems = (startIndex: number, stopIndex: number): Promise<void> => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setData((prevData) => {
          const newData = [...prevData];
          for (let i = startIndex; i <= stopIndex; i++) {
            if (!newData[i]) {
              newData[i] = { option: `Option ${i}`, description: `Description for ${i}` };
            }
          }
          return newData;
        });
        resolve();
      }, 1000);
    });
  };

  return (
    <Stack style={{ borderRadius: '25%' }}>
      <InfiniteLoader isItemLoaded={isItemLoaded} itemCount={data.length} loadMoreItems={loadMoreItems}>
        {({ onItemsRendered, ref }: any) => (
          <List
            height={650}
            width={1100}
            itemCount={data.length}
            itemSize={20}
            itemData={data}
            onItemsRendered={onItemsRendered}
            ref={ref}
          >
            {({ index, style }) => (
              <div style={style}>
                <Row data={data[index]} index={index} />
              </div>
            )}
          </List>
        )}
      </InfiniteLoader>
    </Stack>
  );
};

export default LogsTerminal;