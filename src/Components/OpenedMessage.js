import React from 'react';
import watermark from './watermark1.png';

const OpenedMessage = (props) => {
  return (
    <div
      style={{
        width: '25%',
        height: '60%',
        position: 'absolute',
        top: '25%',
        left: '37.5%',
        backgroundColor: '#EFE5D5',
        border: 'solid',
        borderColor: 'gray',
      }}
    >
      <img
        src={watermark}
        style={{
          width: '75%',
          position: 'absolute',
          bottom: '1%',
          right: '1%',
          opacity: '0.35',
        }}
        alt="can't find watermark"
      ></img>
      <div
        style={{
          fontSize: '1.5rem',
          position: 'absolute',
          top: '2.5rem',
          left: '2.5rem',
        }}
      >
        Ĉ̸̡̡̛̞͎̼̪̳͈̗͖̒͆̈̎ȍ̶̞̦͇̠̊͐ņ̸̮̺̬̺͔͇͋͐̍̄̈́̈̓͑͝g̵̳͕̱̦̠͈̠͌̔̂͊́r̵͈͎̤̫̤̚a̸̢̢͓̮̳͓͗̾̂͌t̶̨͓̼̫̤̭̘̎̐̀͝ŝ̴̡̡͙̝̽͑ ̵̝͔͎̩̳͍͌̓̕͜M̷̢̮̼̼̳̬̝̯̀́̐̿͠i̸̛̝̔̊̍̊̽͘͝n̷͎̞̲̝͊͝q̵̡̫̀̈́̎̓͒i̵̳̽!̷̟̈́͑͛̕!̸̨̐̅̓̐̌̌!̷̝̱̜̳̰̰̹͋͌̒͐̈́͝!̷̧͉̖̖̲̺̪͍̈̀͂͐͝!̶̝̅́͌́̐!̷̡̰͔̎̀̒̎̓̀̍!̶͙̫̥͈͙̝̔͋̇̆̄̏́͑̚͜!̷̧̧̙͕͕̯͖̹̈́̆͑͌̒̈́̚ͅ
      </div>
    </div>
  );
};

export default OpenedMessage;
