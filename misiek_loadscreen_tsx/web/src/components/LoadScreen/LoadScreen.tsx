import React from 'react';
import { observer } from 'mobx-react-lite';
import { clsx } from '../../utils/clsx';
import s from './LoadScreen.module.scss';
import { BsArrowRepeat } from 'react-icons/bs';
import {GameLoadingState} from "../../services/loadscreen/loadstate.service";

const preparingTitleNode = (
    <ul>
        <li>Connecting to SERVERNAME</li>
        <li>Unwrapping singularity</li>
        <li>Merging black holes</li>
        <li>Asserting dominance</li>
        <li>Fixing bugs</li>
        <li>Almost there</li>
        <li>Why are we here</li>
        <li>What is the point?</li>
        <li>Okay, this takes way too much time 😒</li>
        <li><BsArrowRepeat /></li>
    </ul>
);

const readyTitleNode = (
    <ul>
        <li>Connect is ready!</li>
    </ul>
);

export const LoadScreen = observer(function LoadScreen() {
    const progress = `${GameLoadingState.loadingProgress * 100}%`;
    const progressClassName = clsx(s.progress, {
        [s.indeterminate]: GameLoadingState.loadingProgress === 0,
    });

    const titleNode = progress > '90%'
        ? readyTitleNode
        : preparingTitleNode;

    return (
        <div className={clsx(s.root, 'animated-background')}>
            <div className={s.text}>
                {titleNode}
            </div>

            <div className={progressClassName}>
                <div className={s.bar} style={{ width: progress }} />
            </div>
        </div>
    );
});
