// {
//
//         "type": "good"
//     }
export default function ControlItem({ options, onIncrement }) {
  // return (
  //   <>
  //     {buttons.map(button => (
  //       <button
  //         key={button.type}
  //         type="button"
  //         onClick={() => onIncrement(button.type)}
  //         style={{ textTransform: 'capitalize' }}
  //       >
  //         {button.type}
  //       </button>
  //     ))}
  //   </>
  // );
  return (
    <>
      {Object.keys(options).map(option => (
        <button
          key={option}
          type="button"
          onClick={() => onIncrement(option)}
          style={{ textTransform: 'capitalize' }}
        >
          {option}
        </button>
      ))}
    </>
  );
}
