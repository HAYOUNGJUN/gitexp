import { Component } from 'react';

type BoxProps = {
  title: string;
  imgPath: string;
  result: string;
};

class Box extends Component<BoxProps> {
  render() {
    return (
      <div className={`box ${this.props.result}`}>
        <h1>{this.props.title}</h1>
        <img src={this.props.imgPath} />
        <h2>{this.props.result && this.props.result.toUpperCase()}</h2>
      </div>
    );
  }
}

// export default function Box({ title, imgPath, result }: BoxProps) {
//   return (
//     <div className={`box ${result}`}>
//       <h1>{title}</h1>
//       <img src={imgPath} />
//       <h2>{result && result.toUpperCase()}</h2>
//     </div>
//   );
// }

export default Box;
