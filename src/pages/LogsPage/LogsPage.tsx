import { Stack, YStack } from "tamagui";
import TitleLogo from "../Dashboard/TitleLogo";
import LogsTerminal from "./logsTerminal";



const LogsPage = () => {
    return (
        <YStack
            space="$4"
            alignItems="start"
            px="24px"
            minWidth="500px"
            width="50vh"
            style={{
                flexGrow: '1',
                marginTop: '16px',
                overflowY: 'auto',
            }}
            className={'transparent-scrollbar'}
        >
            <TitleLogo />
            <LogsTerminal></LogsTerminal>
        </YStack>
    )
}

export default LogsPage;