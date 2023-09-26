
import { IconButton } from "@status-im/components";
import { Stack } from "tamagui";

type IconButtonWithDotProps = {
    iconEl: any;
    variant: 'ghost' | 'outline';
    isDotOn: boolean;
    selected?: boolean;
    disabled?: boolean;
};

const IconButtonWithDot = ({ iconEl, variant, isDotOn, selected, disabled }: IconButtonWithDotProps) => {
    return (
        <Stack style={{ position: 'relative', display: 'inline-block' }} >
            <IconButton icon={iconEl} variant={variant} selected={selected} disabled={disabled} />
            {isDotOn && (
                <Stack style={{
                    position: 'absolute',
                    right: 7,
                    top: 5,
                    width: '9px',
                    height: '9px',
                    borderRadius: '50%',
                    backgroundColor: '#1992D7',
                    border: '1.5px solid #fff'
                }} />
            )}
        </Stack >
    );
};

export default IconButtonWithDot;
