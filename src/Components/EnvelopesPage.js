import React from 'react';
import ClosedEnvelope from './ClosedEnvelope';
import RunningGirl from './RunningGirl';
import OpenedMessage from './OpenedMessage';

const EnvelopesPage = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {props.envelopes.map((envelope) => {
        const out = (
          <ClosedEnvelope
            x={envelope[0]}
            verticalLevel={envelope[1]}
            id={envelope[2]}
            setOpened={props.setOpened}
            open={props.opened}
            name={props.messages[envelope[2] - 1].name}
          />
        );
        return out;
      })}
      <RunningGirl
        x={props.x}
        setX={props.setX}
        verticalLevel={props.verticalLevel}
        setVerticalLevel={props.setVerticalLevel}
        r={props.r}
        setR={props.setR}
        length={props.messages.length}
      />
      {props.opened !== 0 ? (
        <OpenedMessage
          id={props.opened}
          body={props.messages[props.opened - 1]}
          setOpen={props.setOpened}
        />
      ) : null}
    </div>
  );
};

export default EnvelopesPage;
