import React from 'react';
import autosize from 'autosize';

import { useClassNames } from '@/utils/hooks';

import styles from './index.module.css';

type Props = {
    value: string;
    // onChange だと event を受け取る感じになりそうなので onEdit
    onEdit: (text: string) => void;
    placeholder?: string;
    className?: string;
};

export const Editor: React.FC<Props> = ({
    className,
    placeholder,
    value,
    onEdit: onEdit,
}) => {
    const ref = React.useRef<HTMLTextAreaElement>(null);

    React.useEffect(() => {
        if (ref.current) {
            autosize(ref.current);
        }
    }, []);

    const handleChange = React.useCallback(
        (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
            onEdit(ev.target.value);
        },
        [onEdit],
    );

    return (
        <textarea
            className={useClassNames(styles.editor, className)}
            placeholder={placeholder}
            ref={ref}
            onChange={handleChange}
            value={value}
        />
    );
};
